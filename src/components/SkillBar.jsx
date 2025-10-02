import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, index }) => {
  const getLevelWidth = (level) => {
    switch (level) {
      case 'Beginner':
        return '25%';
      case 'Intermediate':
        return '60%';
      case 'Advanced':
        return '90%';
      default:
        return '50%';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'bg-yellow-500';
      case 'Intermediate':
        return 'bg-blue-500';
      case 'Advanced':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {skill.level}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: getLevelWidth(skill.level) }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
