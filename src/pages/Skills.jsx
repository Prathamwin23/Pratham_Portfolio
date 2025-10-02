import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cloud, Database, Monitor, Layers } from 'lucide-react';
import SkillBar from '../components/SkillBar';
import skillsData from '../data/skills.json';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      skills: skillsData.Programming,
      color: 'text-blue-500'
    },
    {
      title: 'DevOps Tools',
      icon: <Server className="w-6 h-6" />,
      skills: skillsData['DevOps Tools'],
      color: 'text-green-500'
    },
    {
      title: 'Cloud',
      icon: <Cloud className="w-6 h-6" />,
      skills: skillsData.Cloud,
      color: 'text-orange-500'
    },
    {
      title: 'Monitoring & Visualization',
      icon: <Monitor className="w-6 h-6" />,
      skills: skillsData['Monitoring & Visualization'],
      color: 'text-purple-500'
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: skillsData.Databases,
      color: 'text-red-500'
    },
    {
      title: 'Frameworks',
      icon: <Layers className="w-6 h-6" />,
      skills: skillsData.Frameworks,
      color: 'text-indigo-500'
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across 
            different technologies and tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    skill={skill} 
                    index={skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="card p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Technical Expertise Summary
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  DevOps & Cloud
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  CI/CD pipelines, container orchestration, and cloud infrastructure management
                </p>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  Automation
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Infrastructure as Code, automated deployments, and monitoring solutions
                </p>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  Development
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Python, web frameworks, and full-stack application development
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="card p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Continuous Learning
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Currently Learning
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Advanced Kubernetes patterns and best practices</li>
                  <li>• Cloud-native security and compliance</li>
                  <li>• Microservices architecture and service mesh</li>
                  <li>• Advanced monitoring and observability tools</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Future Goals
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• AWS Solutions Architect certification</li>
                  <li>• Kubernetes Certified Administrator (CKA)</li>
                  <li>• Terraform Associate certification</li>
                  <li>• Contributing to open-source DevOps tools</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
