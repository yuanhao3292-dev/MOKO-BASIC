import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { ChatMessage, Language } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { TRANSLATIONS } from '../constants';

interface AiAssistantProps {
  language: Language;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update welcome message when language changes or on init
  useEffect(() => {
    setMessages([{ 
      role: 'model', 
      text: TRANSLATIONS[language].aiWelcome, 
      timestamp: Date.now() 
    }]);
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Convert internal message format to history format for Gemini service
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    
    const responseText = await sendMessageToGemini(history, userMsg.text, language);
    
    const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-mofu-black text-white p-4 rounded-full shadow-xl hover:bg-stone-700 transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <Sparkles size={24} />
      </button>

      {/* Chat Interface */}
      <div 
        className={`fixed bottom-6 right-6 z-50 w-full max-w-sm bg-white shadow-2xl rounded-lg border border-stone-200 overflow-hidden flex flex-col transition-all duration-300 transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
        style={{ height: '500px' }}
      >
        {/* Header */}
        <div className="bg-mofu-paper p-4 border-b border-stone-200 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles size={16} className="text-mofu-red" />
            <span className="font-bold text-sm tracking-wide">Mofu AI Assistant</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-stone-500 hover:text-mofu-black">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-mofu-black text-white'
                    : 'bg-stone-100 text-stone-800'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-stone-100 rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-stone-200 bg-white">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about sizing or materials..."
              className="flex-1 bg-stone-50 border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-mofu-black transition-colors"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2 bg-mofu-red text-white rounded-md hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};