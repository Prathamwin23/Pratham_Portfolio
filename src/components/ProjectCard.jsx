import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, BookOpen } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const getButtonContent = () => {
    if (project.type === 'DevOps') {
      return (
        <>
          <BookOpen size={16} />
          Read Case Study
        </>
      );
    } else {
      // Check if demo link is a video (Google Drive or YouTube)
      const isVideo = project.demo && (
        project.demo.includes('drive.google.com') || 
        project.demo.includes('youtube.com') || 
        project.demo.includes('youtu.be')
      );
      
      return (
        <>
          <ExternalLink size={16} />
          {isVideo ? 'Watch Demo' : 'View Live App'}
        </>
      );
    }
  };

  const getButtonLink = () => {
    if (project.type === 'DevOps') {
      return project.mediumLink;
    } else {
      return project.demo;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="card p-6 h-full"
    >
      {/* Project Image */}
      <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x200/3b82f6/ffffff?text=Project+Image';
          }}
        />
      </div>

      {/* Project Title */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Tags */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 btn-secondary flex-1 justify-center"
        >
          <Github size={16} />
          <span>GitHub</span>
        </motion.a>

        {getButtonLink() && (
          <motion.a
            href={getButtonLink()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 btn-primary flex-1 justify-center"
          >
            {getButtonContent()}
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
