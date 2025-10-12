import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Headphones, FileText, Star, Eye, Heart } from 'lucide-react';
import { Content } from '../../types';

interface ContentCardProps {
  content: Content;
}

export const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  const getContentIcon = (className = "h-5 w-5") => {
    switch (content.content_type) {
      case 'video':
        return <Play className={className} />;
      case 'podcast':
        return <Headphones className={className} />;
      case 'blog':
        return <FileText className={className} />;
      default:
        return <FileText className={className} />;
    }
  };

  const getTypeColor = () => {
    switch (content.content_type) {
      case 'video':
        return 'from-red-500 to-pink-500';
      case 'podcast':
        return 'from-purple-500 to-indigo-500';
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <Link to={`/content/${content.slug}`} className="block w-full h-full">
          {content.thumbnail_url ? (
            <img
              src={content.thumbnail_url}
              alt={content.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${getTypeColor()}`}>
              <div className="text-white opacity-80">
                {getContentIcon("h-10 w-10")}
              </div>
            </div>
          )}
        </Link>
        
        {/* Premium Badge */}
        {content.is_premium && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
            <Star className="h-3 w-3" fill="currentColor" />
            <span>PREMIUM</span>
          </div>
        )}

        {/* Content Type Badge */}
        <div className="absolute top-3 right-3 bg-black/50 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm flex items-center space-x-1.5">
          {getContentIcon("h-4 w-4")}
          <span className="capitalize">{content.content_type}</span>
        </div>

        {/* Overlay for creator info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex items-center space-x-3">
            <img
              src={content.creator_avatar || `https://ui-avatars.com/api/?name=${content.creator_display_name}&background=random`}
              alt={content.creator_display_name}
              className="w-10 h-10 rounded-full border-2 border-white/80"
            />
            <div>
              <p className="font-semibold text-white text-sm">{content.creator_display_name}</p>
              <p className="text-xs text-white/80">{formatDate(content.created_at)}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        {/* Category */}
        {content.category_name && (
          <span className="inline-block bg-purple-100 text-purple-700 px-2.5 py-1 rounded-md text-xs font-semibold mb-3">
            {content.category_name}
          </span>
        )}

        {/* Title */}
        <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 leading-snug text-lg group-hover:text-purple-600 transition-colors">
          <Link to={`/content/${content.slug}`}>
            {content.title}
          </Link>
        </h3>

        {/* Description */}
        {content.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
            {content.description}
          </p>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1.5">
                <Eye className="h-4 w-4 text-gray-400" />
                <span>1.2K</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Heart className="h-4 w-4 text-gray-400" />
                <span>45</span>
              </div>
            </div>
            <Link to={`/content/${content.slug}`} className="text-sm font-semibold text-purple-600 hover:text-purple-800">
              Read More →
            </Link>
        </div>
      </div>
    </div>
  );
};