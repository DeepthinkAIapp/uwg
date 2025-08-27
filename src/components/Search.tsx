'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { getAllPages } from '@/lib/content';

export function Search() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pages = getAllPages();

  const filteredPages = useMemo(() => {
    if (!query.trim()) return [];
    
    return pages.filter((page) =>
      page.title.toLowerCase().includes(query.toLowerCase()) ||
      page.description.toLowerCase().includes(query.toLowerCase()) ||
      page.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    ).slice(0, 10); // Limit to 10 results
  }, [query, pages]);

  const handleResultClick = (page: { category: string; slug: string }) => {
    setIsOpen(false);
    setQuery(&apos;&apos;);
    router.push(`/${page.category}/${page.slug}`);
  };

  return (
    <div className="search-container" style={{ position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search services, plants, or topics..."
          className="search-input"
          style={{
            width: &apos;100%&apos;,
            padding: 'var(--spacing-md) var(--spacing-lg)',
            paddingLeft: 'calc(var(--spacing-lg) + 20px)',
            border: '1px solid var(--gray-300)',
            borderRadius: 'var(--radius-lg)',
            fontSize: '1rem',
            outline: 'none',
            transition: 'var(--transition-fast)'
          }}
        />
        <i 
          className="fas fa-search" 
          style={{
            position: 'absolute',
            left: 'var(--spacing-md)',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--gray-400)'
          }}
        ></i>
      </div>
      
      {isOpen && query && (
        <>
          {/* Backdrop */}
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999
            }}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Results */}
          <div 
            className="search-results"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--white)',
              border: '1px solid var(--gray-200)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-xl)',
              zIndex: 1000,
              maxHeight: '400px',
              overflowY: 'auto',
              marginTop: 'var(--spacing-sm)'
            }}
          >
            {filteredPages.length > 0 ? (
              filteredPages.map((page) => (
                <div
                  key={page.slug}
                  className="search-result"
                  onClick={() => handleResultClick(page)}
                  style={{
                    padding: &apos;var(--spacing-md)&apos;,
                    borderBottom: '1px solid var(--gray-100)',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gray-50)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--white)';
                  }}
                >
                  <h3 style={{ 
                    color: 'var(--primary-blue)', 
                    marginBottom: 'var(--spacing-xs)',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    {page.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--gray-600)', 
                    fontSize: '0.875rem',
                    marginBottom: 'var(--spacing-xs)'
                  }}>
                    {page.description}
                  </p>
                  <div style={{ display: 'flex', gap: 'var(--spacing-xs)', flexWrap: 'wrap' }}>
                    {page.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        style={{ 
                          background: 'var(--gray-100)', 
                          color: 'var(--gray-600)', 
                          padding: '2px var(--spacing-xs)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.75rem'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div style={{ 
                padding: 'var(--spacing-xl)', 
                textAlign: 'center',
                color: 'var(--gray-500)'
              }}>
                No results found for &ldquo;{query}&rdquo;
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
