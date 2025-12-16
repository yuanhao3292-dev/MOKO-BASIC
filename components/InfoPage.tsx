
import React from 'react';
import { Language } from '../types';
import { INFO_LINKS } from '../constants';
import { ChevronRight } from 'lucide-react';

interface InfoPageProps {
  pageId: string;
  language: Language;
}

export const InfoPage: React.FC<InfoPageProps> = ({ pageId, language }) => {
  const pageInfo = INFO_LINKS.find(p => p.id === pageId);

  if (!pageInfo) return <div className="min-h-screen pt-32 text-center">Page Not Found</div>;

  const content = pageInfo.content[language];
  // Simple check to see if content is HTML (starts with <div, <p, <table etc or contains tags)
  const isHtml = /<[a-z][\s\S]*>/i.test(content);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-stone-400 mb-8">
           <span>Moko Basic</span>
           <ChevronRight size={12} />
           <span>Info</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-mofu-black mb-12">{pageInfo.label[language]}</h1>
        
        <div className="prose prose-stone max-w-none font-serif text-base md:text-lg leading-loose text-stone-600">
           {isHtml ? (
             <div dangerouslySetInnerHTML={{ __html: content }} className="space-y-8" />
           ) : (
             content.split('\n').map((line, i) => (
               <p key={i} className="mb-6 min-h-[1em]">{line}</p>
             ))
           )}
        </div>

        <div className="mt-16 border-t border-stone-100 pt-8">
           <p className="text-xs text-stone-400 italic">
             Last Updated: October 2025
           </p>
        </div>
      </div>
    </div>
  );
};
