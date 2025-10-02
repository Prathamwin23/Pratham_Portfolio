import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import contactsData from '../data/contacts.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Pratham Patel
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              DevOps Engineer | Cloud Enthusiast | Python Developer
            </p>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <MapPin size={16} className="mr-2" />
              <span>{contactsData.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <motion.a
                href={contactsData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-200 dark:bg-dark-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={contactsData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-200 dark:bg-dark-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href={`mailto:${contactsData.socialLinks.email}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-200 dark:bg-dark-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-colors duration-200"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-dark-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} Pratham Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
