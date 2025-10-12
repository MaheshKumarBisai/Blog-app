import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import { FileText, Video, Podcast } from 'lucide-react';

export const InfoSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="w-full max-w-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Welcome to ContentHub
        </h1>
        <p className="text-xl text-gray-600">
          Discover, create, and share amazing content with the world.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <FeatureCard
            icon={<FileText className="h-8 w-8 text-blue-500" />}
            title="Blogs"
            description="Read insightful articles from top creators."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <FeatureCard
            icon={<Video className="h-8 w-8 text-red-500" />}
            title="Videos"
            description="Watch engaging videos on various topics."
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <FeatureCard
            icon={<Podcast className="h-8 w-8 text-purple-500" />}
            title="Podcasts"
            description="Listen to inspiring podcasts on the go."
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};