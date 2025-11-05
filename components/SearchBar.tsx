
import React, { useState } from 'react';
import { SearchIcon } from './icons';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for medical conditions, treatments, etc."
          disabled={isLoading}
          className="w-full pl-4 pr-12 py-3.5 text-lg bg-white dark:bg-gray-800 border-2 border-transparent focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 focus:border-blue-500 dark:focus:border-blue-500 rounded-full shadow-lg transition-all duration-300 outline-none disabled:opacity-60 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute inset-y-0 right-0 flex items-center justify-center w-14 h-full text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 dark:disabled:bg-blue-800 disabled:cursor-not-allowed rounded-full transition-colors"
        >
          <SearchIcon className="h-6 w-6" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
