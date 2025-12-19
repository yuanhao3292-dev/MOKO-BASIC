import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { User, AuthSession } from '../../types';
import { authApi } from '../services/api';

interface AuthContextType extends AuthSession {
  login: () => Promise<void>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for authentication on mount and after OAuth callback
  const refreshSession = useCallback(async () => {
    try {
      const response = await authApi.getSession();
      if (response.data) {
        setUser(response.data.user);
        setIsAuthenticated(response.data.isAuthenticated);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Failed to refresh session:', error);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Initialize auth state
  useEffect(() => {
    // Check URL for auth callback parameters
    const urlParams = new URLSearchParams(window.location.search);
    const authSuccess = urlParams.get('auth_success');
    const authError = urlParams.get('auth_error');

    if (authSuccess) {
      // Clear the URL params
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    if (authError) {
      console.error('Auth error:', authError);
      // Clear the URL params
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Refresh session
    refreshSession();
  }, [refreshSession]);

  // Login with Amazon
  const login = useCallback(async () => {
    try {
      const response = await authApi.getAmazonAuthUrl();
      if (response.data?.authorization_url) {
        // Redirect to Amazon OAuth
        window.location.href = response.data.authorization_url;
      } else {
        console.error('Failed to get authorization URL:', response.error);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  }, []);

  // Logout
  const logout = useCallback(async () => {
    try {
      await authApi.logout();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    refreshSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
