import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample search data - now with dynamic routes for team and publications
const searchData = {
    team: [
      { id: 1, name: 'Dr. Sarah Chen', type: 'team', field: 'Medical AI & Deep Learning', route: '/profile/1' },
      { id: 2, name: 'Dr. Michael Rodriguez', type: 'team', field: 'Bioinformatics & Genomics', route: '/profile/2' },
      { id: 3, name: 'Dr. Emily Watson', type: 'team', field: 'Medical Imaging & Computer Vision', route: '/profile/3' },
      { id: 4, name: 'Dr. James Park', type: 'team', field: 'Natural Language Processing', route: '/profile/4' },
      { id: 5, name: 'Dr. Lisa Kumar', type: 'team', field: 'Cancer Detection & Oncology AI', route: '/profile/5' },
      { id: 6, name: 'Dr. Alex Thompson', type: 'team', field: 'Plant Disease Detection', route: '/profile/6' },
      { id: 7, name: 'Dr. Maria Garcia', type: 'team', field: 'Drug Discovery & Molecular AI', route: '/profile/7' },
      { id: 8, name: 'Dr. David Kim', type: 'team', field: 'Agricultural AI & Precision Farming', route: '/profile/8' },
      { id: 9, name: 'Dr. Jennifer Lee', type: 'team', field: 'Neuroscience & Brain Imaging AI', route: '/profile/9' },
      { id: 10, name: 'Dr. Robert Zhang', type: 'team', field: 'Robotics & Surgical AI', route: '/profile/10' },
      { id: 11, name: 'Dr. Anis', type: 'team', field: 'Machine Learning & Data Science', route: '/profile/11' }
    ],
    research: [
      { id: 1, name: 'Medical AI', type: 'research', field: 'AI systems for medical diagnosis', route: '/research' },
      { id: 2, name: 'Bioinformatics', type: 'research', field: 'Computational analysis of biological data', route: '/research' },
      { id: 3, name: 'Deep Learning', type: 'research', field: 'Advanced neural network architectures', route: '/research' },
      { id: 4, name: 'Cancer Detection', type: 'research', field: 'AI-powered cancer detection systems', route: '/research' },
      { id: 5, name: 'Agriculture AI', type: 'research', field: 'Smart farming solutions using AI', route: '/research' }
    ],
    publications: [
      { id: 1, name: 'Deep Learning Approaches for Early Cancer Detection', type: 'publication', field: 'Nature Medicine 2024', route: '/publications/1' },
      { id: 2, name: 'Bioinformatics Pipeline for Genomic Variant Analysis', type: 'publication', field: 'Bioinformatics 2024', route: '/publications/2' },
      { id: 3, name: 'AI-Driven Plant Disease Detection', type: 'publication', field: 'IEEE Transactions on Agriculture 2023', route: '/publications/3' },
      { id: 4, name: 'Natural Language Processing for Clinical Decision Support', type: 'publication', field: 'AMIA Annual Symposium 2023', route: '/publications/4' },
      { id: 5, name: 'Robotic Surgery AI: Enhancing Precision', type: 'publication', field: 'ICRA 2023', route: '/publications/5' }
    ],
    services: [
      { id: 1, name: 'Research Collaboration', type: 'service', field: 'Partner with our team on research projects', route: '/services' },
      { id: 2, name: 'AI Model Development', type: 'service', field: 'Custom AI model development', route: '/services' },
      { id: 3, name: 'Data Analysis', type: 'service', field: 'Comprehensive data analysis services', route: '/services' },
      { id: 4, name: 'Journal Paper Assistance', type: 'service', field: 'Academic writing and publication support', route: '/services' },
      { id: 5, name: 'Workshops & Training', type: 'service', field: 'Educational workshops and training programs', route: '/services' }
    ]
  };

const SearchBar = ({ onSearch, placeholder = "Search research, publications, team members..." }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const performSearch = useCallback((term) => {
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    const results = [];
    const searchTermLower = term.toLowerCase();

    // Search through all categories
    Object.values(searchData).flat().forEach(item => {
      if (
        item.name.toLowerCase().includes(searchTermLower) ||
        item.field.toLowerCase().includes(searchTermLower)
      ) {
        results.push(item);
      }
    });

    // Sort results by relevance (exact matches first)
    results.sort((a, b) => {
      const aNameMatch = a.name.toLowerCase().includes(searchTermLower);
      const bNameMatch = b.name.toLowerCase().includes(searchTermLower);
      if (aNameMatch && !bNameMatch) return -1;
      if (!aNameMatch && bNameMatch) return 1;
      return 0;
    });

    setSearchResults(results.slice(0, 8)); // Limit to 8 results
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(searchTerm);
    }, 300); // Debounce search

    return () => clearTimeout(timeoutId);
  }, [searchTerm, performSearch]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleResultClick = (result) => {
    navigate(result.route);
    setSearchTerm('');
    setIsOpen(false);
    if (onSearch) onSearch(result);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'team': return '👨‍🔬';
      case 'research': return '🔬';
      case 'publication': return '📄';
      case 'service': return '⚙️';
      default: return '🔍';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'team': return 'bg-blue-100 text-blue-800';
      case 'research': return 'bg-green-100 text-green-800';
      case 'publication': return 'bg-purple-100 text-purple-800';
      case 'service': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        />
        {searchTerm && (
          <button
            onClick={() => {
              setSearchTerm('');
              setIsOpen(false);
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (searchTerm || searchResults.length > 0) && (
        <div className="absolute z-50 mt-1 w-full bg-white shadow-lg max-h-96 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {isLoading ? (
            <div className="px-4 py-3 text-center text-gray-500">
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Searching...
              </div>
            </div>
          ) : searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <div
                key={`${result.type}-${result.id}`}
                onClick={() => handleResultClick(result)}
                className="cursor-pointer select-none relative py-3 pl-3 pr-9 hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex items-center">
                  <span className="text-lg mr-3">{getTypeIcon(result.type)}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {result.name}
                      </p>
                      <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(result.type)}`}>
                        {result.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      {result.field}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : searchTerm ? (
            <div className="px-4 py-3 text-center text-gray-500">
              No results found for "{searchTerm}"
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
