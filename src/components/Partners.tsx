import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'ZoomInfo', logo: 'https://cdn.worldvectorlogo.com/logos/zoom-communications-logo-1.svg' },
  { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg' }, // Marketing agency relevant
  { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' } // CRM and agency-relevant
];

const Partners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners in Innovation</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;