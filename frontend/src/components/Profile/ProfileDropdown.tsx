import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface ProfileDropdownProps {
  onLogout: () => void;
  onClose: () => void;
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onLogout, onClose }) => {
  const { user } = useAuth();

  const dropdownVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.1 }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
  };

  return (
    <motion.div
      className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      variants={dropdownVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="py-2 px-2">
        <div className="flex items-center px-3 py-2 mb-2">
          {user?.avatar_url ? (
            <img
              src={user.avatar_url}
              alt="Avatar"
              className="h-10 w-10 rounded-full"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
          )}
          <div className="ml-3">
            <p className="text-sm font-semibold text-gray-900 truncate max-w-28">
              {user?.display_name || user?.email}
            </p>
            <p className="text-xs text-gray-500">
              {user?.is_creator ? 'Creator' : 'User'}
            </p>
          </div>
        </div>

        <Link
          to="/profile"
          onClick={onClose}
          className="flex items-center w-full px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          <User className="mr-3 h-4 w-4" />
          View Profile
        </Link>
        <Link
          to="/settings"
          onClick={onClose}
          className="flex items-center w-full px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          <Settings className="mr-3 h-4 w-4" />
          Settings
        </Link>
        <div className="border-t border-gray-100 my-1" />
        <button
          onClick={onLogout}
          className="flex items-center w-full px-3 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors"
        >
          <LogOut className="mr-3 h-4 w-4" />
          Logout
        </button>
      </div>
    </motion.div>
  );
};