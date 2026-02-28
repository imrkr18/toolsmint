"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { Tool, ToolCategory } from '@/config/site';

type SortOption = 'name-asc' | 'name-desc' | 'category-asc' | 'category-desc';

interface ToolDirectoryProps {
  tools: Tool[];
  categories: ToolCategory[];
}

export default function ToolDirectory({ tools, categories }: ToolDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ToolCategory | 'All'>('All');
  const [sortOption, setSortOption] = useState<SortOption>('name-asc');

  const filteredAndSortedTools = useMemo(() => {
    let result = tools;

    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(tool => tool.category === activeCategory);
    }

    // Filter by Search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        (tool.keywords && tool.keywords.some(kw => kw.toLowerCase().includes(query)))
      );
    }

    // Sort
    result = [...result].sort((a, b) => {
      switch (sortOption) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'category-asc':
          // Sort by category first, then by name within category
          return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
        case 'category-desc':
          // Sort by category descending, then by name within category
          return b.category.localeCompare(a.category) || a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [tools, searchQuery, activeCategory, sortOption]);

  return (
    <div className="tool-directory">
      <div className="tool-controls">
        <div className="search-bar-container">
          <div className="search-input-wrapper">
            <input 
              type="text" 
              placeholder="Search tools..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="tool-search-input"
            />
            {searchQuery ? (
              <button 
                className="action-icon-btn clear-search-btn" 
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            ) : (
              <span className="action-icon-btn search-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
            )}
          </div>
          <select 
            value={sortOption} 
            onChange={(e) => setSortOption(e.target.value as SortOption)}
            className="tool-sort-select"
            aria-label="Sort tools"
          >
            <option value="name-asc">Name (A to Z)</option>
            <option value="name-desc">Name (Z to A)</option>
            <option value="category-asc">Category (A to Z)</option>
            <option value="category-desc">Category (Z to A)</option>
          </select>
        </div>
        <div className="category-pills">
          <button 
            className={`category-pill ${activeCategory === 'All' ? 'active' : ''}`}
            onClick={() => setActiveCategory('All')}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredAndSortedTools.length > 0 ? (
        <div className="tools-grid" role="list" aria-label="Available tools">
          {filteredAndSortedTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="card tool-card"
              role="listitem"
              aria-label={tool.name}
            >
              <div className="tool-icon" aria-hidden="true">{tool.icon}</div>
              <span className="tool-cat-badge">{tool.category}</span>
              <div className="tool-name">{tool.name}</div>
              <p className="tool-desc">{tool.description}</p>
              <div className="tool-arrow" aria-hidden="true">→</div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="tools-empty-state">
          <div className="empty-icon">🔍</div>
          <h3>No tools found</h3>
          <p>We couldn't find any tools matching "{searchQuery}" in {activeCategory}.</p>
          <button className="btn btn-secondary" onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}>
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
