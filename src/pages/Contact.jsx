import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import contactsData from '../data/contacts.json';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: contactsData.email,
      link: `mailto:${contactsData.email}`,
      color: 'text-blue-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: contactsData.phone,
      link: `tel:${contactsData.phone}`,
      color: 'text-purple-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: contactsData.location,
      link: null,
      color: 'text-green-500'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      value: contactsData.whatsapp,
      link: `https://wa.me/${contactsData.whatsapp.replace(/[^0-9]/g, '')}`,
      color: 'text-green-600'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: contactsData.socialLinks.github,
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: contactsData.socialLinks.linkedin,
      color: 'hover:text-blue-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: 'Email',
      url: `mailto:${contactsData.socialLinks.email}`,
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm currently looking for new opportunities in DevOps, Cloud Engineering, 
                and Infrastructure roles. Feel free to reach out if you'd like to discuss 
                potential collaborations or just want to chat about technology!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`${info.color} p-3 rounded-lg bg-gray-100 dark:bg-dark-700`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-gray-100 dark:bg-dark-700 rounded-lg text-gray-600 dark:text-gray-400 transition-colors duration-200 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card p-6"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                  Available for Opportunities
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I'm currently open to new opportunities in DevOps, Cloud Engineering, 
                and Infrastructure roles. Let's discuss how I can contribute to your team!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm excited to work on new challenges and help bring your ideas to life. 
              Let's discuss your project requirements and see how we can work together!
            </p>
            <motion.a
              href={`mailto:${contactsData.email}?subject=Project Inquiry`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Start a Conversation</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
