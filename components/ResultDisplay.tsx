
import React from 'react';
import { SearchResult } from '../types';
import { BookOpenIcon } from './icons';

interface ResultDisplayProps {
  result: SearchResult;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
    // A simple markdown-to-jsx parser
    const renderMarkdown = (text: string) => {
        return text.split('\n').map((line, index) => {
            if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-semibold mt-4 mb-2 dark:text-blue-300">{line.substring(4)}</h3>;
            }
            if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-6 mb-3 dark:text-blue-400">{line.substring(3)}</h2>;
            }
            if (line.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 dark:text-blue-500">{line.substring(2)}</h1>;
            }
            if (line.startsWith('* ')) {
                return <li key={index} className="ml-5 list-disc">{line.substring(2)}</li>;
            }
            if (line.trim() === '') {
                return <br key={index} />;
            }
            return <p key={index} className="mb-4">{line}</p>;
        });
    };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden animate-fade-in">
        <div className="p-6 md:p-8">
            <article className="prose prose-lg dark:prose-invert max-w-none prose-h2:text-blue-600 dark:prose-h2:text-blue-400 prose-a:text-blue-600 dark:prose-a:text-blue-400">
                {renderMarkdown(result.summary)}
            </article>
        </div>

        {result.sources && result.sources.length > 0 && (
            <div className="bg-slate-50 dark:bg-gray-800/50 border-t border-slate-200 dark:border-gray-700 px-6 md:px-8 py-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                    <BookOpenIcon className="mr-3 text-blue-600 dark:text-blue-400" />
                    Sources
                </h3>
                <ul className="space-y-3">
                    {result.sources.map((source, index) => (
                        source.web && (
                            <li key={index} className="flex items-start">
                                <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">&#8226;</span>
                                <a 
                                    href={source.web.uri} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                                >
                                    {source.web.title || source.web.uri}
                                </a>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        )}
    </div>
  );
};

export default ResultDisplay;
