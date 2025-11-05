
import React, { useState, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import ResultDisplay from './components/ResultDisplay';
import LoadingSkeleton from './components/LoadingSkeleton';
import { fetchMedicalInfo } from './services/geminiService';
import { SearchResult } from './types';
import { LogoIcon } from './components/icons';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);

  const handleSearch = useCallback(async (query: string) => {
    setIsLoading(true);
    setError(null);
    setSearchResult(null);

    try {
      const result = await fetchMedicalInfo(query);
      setSearchResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  const WelcomeMessage: React.FC = () => (
    <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">AI-Powered Medical Metasearch</h2>
        <p className="mt-2 max-w-xl mx-auto">
            Enter a medical condition, medication, or symptom to get a summarized overview from trusted sources.
        </p>
    </div>
  );

  return (
    <div className="min-h-screen font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <header className="flex flex-col items-center justify-center mb-10 text-center">
            <div className="flex items-center text-blue-600 dark:text-blue-400 mb-3">
                <LogoIcon className="h-10 w-10 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
                    MedicoMetasearch
                </h1>
            </div>
        </header>

        <div className="flex justify-center mb-8">
            <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>
        
        <div className="mt-12">
            {isLoading && <LoadingSkeleton />}
            {error && (
              <div className="text-center max-w-2xl mx-auto p-4 bg-red-100 dark:bg-red-900/50 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-lg">
                <p className="font-semibold">An Error Occurred</p>
                <p>{error}</p>
              </div>
            )}
            {searchResult && <ResultDisplay result={searchResult} />}
            {!isLoading && !error && !searchResult && <WelcomeMessage />}
        </div>
        
        <footer className="text-center mt-20 py-4 text-gray-500 dark:text-gray-400 text-sm">
            <p>Powered by Google Gemini. Information is for educational purposes only.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
