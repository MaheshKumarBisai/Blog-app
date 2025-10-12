import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 h-full"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 15px 30px -10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "rgba(250, 245, 255, 1)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
};