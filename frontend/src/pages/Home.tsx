import React, { useState, useEffect } from 'react';
import { ContentGrid } from '../components/Content/ContentGrid';
import { Content, Category } from '../types';

const mockContent: Content[] = [
  {
    id: '1',
    creator_id: 'user1',
    title: 'Getting Started with React',
    slug: 'getting-started-with-react',
    description: 'A comprehensive guide to start with React.',
    content_type: 'blog',
    thumbnail_url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    is_premium: false,
    is_published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category_name: 'Technology',
  },
  {
    id: '2',
    creator_id: 'user2',
    title: 'The Future of AI',
    slug: 'future-of-ai',
    description: 'Exploring the future of artificial intelligence.',
    content_type: 'video',
    thumbnail_url: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    is_premium: true,
    is_published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category_name: 'AI',
  },
  {
    id: '3',
    creator_id: 'user3',
    title: 'Design Principles for Developers',
    slug: 'design-principles-for-developers',
    description: 'Learn key design principles for developers.',
    content_type: 'podcast',
    thumbnail_url: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    is_premium: false,
    is_published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category_name: 'Design',
  },
    {
    id: '4',
    creator_id: 'user1',
    title: 'Advanced TypeScript',
    slug: 'advanced-typescript',
    description: 'Deep dive into advanced TypeScript features.',
    content_type: 'blog',
    thumbnail_url: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    is_premium: true,
    is_published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category_name: 'Technology',
  },
  {
    id: '5',
    creator_id: 'user2',
    title: 'Building a Startup',
    slug: 'building-a-startup',
    description: 'An interview with a successful startup founder.',
    content_type: 'podcast',
    thumbnail_url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    is_premium: false,
    is_published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category_name: 'Business',
  },
  {
    id: '6',
    creator_id: 'user3',
    title: 'Animating with Framer Motion',
    slug: 'animating-with-framer-motion',
    description: 'A tutorial on creating animations with Framer Motion.',
    content_type: 'video',
    thumbnail_url: 'https://images.unsplash.com/photo-1554302242-42d45a18a29a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    is_premium: false,
    is_published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    category_name: 'Design',
  },
];

export const Home: React.FC = () => {
  const [content, setContent] = useState<Content[]>([]);
  const [categories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    type: '',
    category: '',
    page: 1,
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let filteredContent = mockContent;

      if (filters.type) {
        filteredContent = filteredContent.filter(item => item.content_type === filters.type);
      }

      if (filters.category) {
        filteredContent = filteredContent.filter(item => item.category_slug === filters.category);
      }

      setContent(filteredContent);
      setLoading(false);
    }, 500);
  }, [filters]);

  const updateFilter = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value, page: 1 }));
  };

  const contentTypes = [
    { value: '', label: 'All Types' },
    { value: 'blog', label: 'Blogs' },
    { value: 'video', label: 'Videos' },
    { value: 'podcast', label: 'Podcasts' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Content
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore blogs, videos, and podcasts from talented creators. 
            Access exclusive premium content and expand your knowledge.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Content Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content Type
              </label>
              <select
                value={filters.type}
                onChange={(e) => updateFilter('type', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {contentTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => updateFilter('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Filters */}
            <div className="flex items-end">
              <button
                onClick={() => setFilters({ type: '', category: '', page: 1 })}
                className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Content Grid */}
        <ContentGrid content={content} loading={loading} />

        {/* Load More Button */}
        {content.length > 0 && !loading && (
          <div className="text-center mt-8">
            <button
              onClick={() => setFilters(prev => ({ ...prev, page: prev.page + 1 }))}
              className="px-6 py-3 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              Load More Content
            </button>
          </div>
        )}
      </div>
    </div>
  );
};