
import React from 'react';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6 animate-pulse">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-6"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
      </div>

      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mt-12 mb-6"></div>
      <div className="space-y-3">
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
