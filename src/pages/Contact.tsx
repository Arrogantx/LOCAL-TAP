import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';

interface ContactInfoProps {
  icon: React.ElementType;
  title: string;
  content: string;
  link?: string;
  isButton?: boolean;
}

const Contact = () => {
  useEffect(() => {
    // Create and append the Typeform script
    const script = document.createElement('script');
    script.src = 'https://embed.typeform.com/next/embed.js';
    script.async = true;

    const container = document.getElementById('typeform-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      // Clean up the script when the component unmounts
      if (container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="Contact OneTap Media | Digital Marketing Agency Philadelphia"
        description="Get in touch with Philadelphia's leading digital marketing agency. Schedule a free consultation to discuss your marketing needs. Call (267) 817-7323 today!"
        keywords="contact digital marketing agency, philadelphia marketing agency contact, marketing consultation philadelphia"
        canonicalUrl="https://onetapxmedia.com/contact"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 mb-8">
              We'd love to hear from you. Let's discuss how we can help grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              style={{ height: '700px' }}
            >
              <div
                id="typeform-container"
                className="h-full w-full"
                style={{ position: 'relative', width: '100%', height: '100%' }}
              >
                <div
                  data-tf-live="01JCSHQGSPZBGSVPBZK9C22R6A"
                  style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                ></div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <ContactInfo
                icon={Phone}
                title="Phone"
                content="(267) 817-7323"
                link="tel:+12678177323"
              />
              <ContactInfo
                icon={Mail}
                title="Email"
                content="contact@onetapxmedia.com"
                link="mailto:contact@onetapxmedia.com"
              />
              <ContactInfo
                icon={Clock}
                title="Business Hours"
                content="Monday - Friday: 9:00 AM - 6:00 PM"
              />
              <ContactInfo
                icon={MapPin}
                title="Address"
                content="1500 Chestnut ST STE 2, Philadelphia, PA 19102"
                link="https://www.google.com/maps/place/1500+Chestnut+St+STE+2,+Philadelphia,+PA+19102"
              />
              <ContactInfo
                icon={MessageCircle}
                title="Live Chat"
                content="Click the Live chat tab below for a quick response"
                link="#chat"
                isButton
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <div className="h-[450px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.6683030052087!2d-75.16787372346847!3d39.95115897151661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c62f5e98a5e9%3A0x3986d6d6f6d8f1e1!2s1500%20Chestnut%20St%20STE%202%2C%20Philadelphia%2C%20PA%2019102!5e0!3m2!1sen!2sus!4v1709764532736!5m2!1sen!2sus"
                style={{ 
                  border: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '0.5rem'
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OneTap Media Office Location"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://www.google.com/maps/place/1500+Chestnut+St+STE+2,+Philadelphia,+PA+19102" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 text-sm"
              >
                View Larger Map
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactInfo: React.FC<ContactInfoProps> = ({ icon: Icon, title, content, link, isButton }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-primary-600" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {link ? (
        isButton ? (
          <button 
            onClick={() => window.open(link, '_blank')}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            {content}
          </button>
        ) : (
          <a
            href={link}
            target={link.startsWith('http') ? '_blank' : undefined}
            rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            {content}
          </a>
        )
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </div>
);

export default Contact;
