import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cloud, Database, Monitor, GitBranch } from 'lucide-react';

const About = () => {
  const expertise = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'DevOps & CI/CD',
      description: 'Building robust CI/CD pipelines with Jenkins, GitHub Actions, and automated deployment strategies.'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Infrastructure',
      description: 'Designing and managing scalable cloud solutions on AWS and Azure with Infrastructure as Code.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Container Orchestration',
      description: 'Expertise in Docker and Kubernetes for containerized application deployment and management.'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Monitoring & Observability',
      description: 'Implementing comprehensive monitoring solutions with Prometheus, Grafana, and observability tools.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Python Development',
      description: 'Building backend applications and automation scripts with Python, Django, and modern frameworks.'
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'Infrastructure as Code',
      description: 'Managing infrastructure with Terraform and Ansible for consistent, repeatable deployments.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate DevOps Engineer with a strong foundation in cloud technologies, 
            automation, and modern software development practices. My journey in technology 
            has been driven by a desire to bridge the gap between development and operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                As an IT graduate with hands-on experience in cloud infrastructure and DevOps practices, 
                I specialize in creating efficient, scalable, and reliable systems. My expertise spans 
                across CI/CD automation, container orchestration, and comprehensive monitoring solutions.
              </p>
              <p>
                I believe in the power of automation and Infrastructure as Code to create consistent, 
                repeatable, and maintainable systems. My approach combines technical expertise with 
                a focus on platform stability and scalable deployments.
              </p>
              <p>
                When I'm not building infrastructure or automating deployments, I enjoy exploring 
                new technologies, contributing to open-source projects, and sharing knowledge with 
                the developer community.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '0', label: 'Years Experience' },
              { number: '10', label: 'Projects Completed' },
              { number: '5+', label: 'Technologies Mastered' },
              { number: '1', label: 'Cloud Certifications' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 card"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Areas of Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card p-6 text-center"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
