import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ProfileModal } from '../components/Profile/ProfileModal';
import { User, Edit } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500" />
          <div className="px-8 pb-8 -mt-20">
            <div className="flex items-end space-x-5">
              {user?.avatar_url ? (
                <img
                  src={user.avatar_url}
                  alt="Avatar"
                  className="h-36 w-36 rounded-full object-cover ring-4 ring-white"
                />
              ) : (
                <div className="h-36 w-36 rounded-full bg-gray-200 flex items-center justify-center ring-4 ring-white">
                  <User className="h-20 w-20 text-gray-400" />
                </div>
              )}
              <div className="pb-4">
                <h1 className="text-3xl font-bold text-gray-900">{user?.display_name || user?.email}</h1>
                <p className="text-sm text-gray-500">{user?.is_creator ? 'Creator' : 'User'}</p>
              </div>
              <div className="flex-grow flex justify-end pb-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 flex items-center"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600">{user?.bio || 'No bio provided.'}</p>
            </div>
            {user?.website && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Website</h2>
                <a
                  href={user.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  {user.website}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && <ProfileModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};