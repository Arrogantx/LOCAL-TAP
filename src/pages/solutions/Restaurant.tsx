import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, MapPin, Star, Camera, Share2, Users } from 'lucide-react';
import ParallaxSection from '../../components/ParallaxSection';
import SEOHelmet from '../../components/SEOHelmet';
import { useModalStore } from '../../store/modalStore';

const features = [
  {
    icon: MapPin,
    title: 'Local SEO',
    description: 'Dominate local search results and attract nearby diners.'
  },
  {
    icon: Star,
    title: 'Review Management',
    description: 'Build and maintain a stellar online reputation.'
  },
  {
    icon: Camera,
    title: 'Visual Marketing',
    description: 'Showcase your dishes with stunning photography.'
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Engage customers across social platforms.'
  },
  {
    icon: Users,
    title: 'Customer Loyalty',
    description: 'Build lasting relationships with diners.'
  },
  {
    icon: Utensils,
    title: 'Menu Optimization',
    description: 'Digital menu strategies that drive orders.'
  }
];

const Restaurant = () => {
  const { setActiveModal } = useModalStore();

  const handleGetStarted = () => {
    setActiveModal('onboarding');
  };

  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="Restaurant Marketing Solutions | Digital Marketing for Restaurants"
        description="Grow your restaurant with our specialized digital marketing solutions. Increase reservations, boost online orders, and build customer loyalty."
        keywords="restaurant marketing, restaurant digital marketing, restaurant SEO, restaurant social media, restaurant advertising, food marketing"
        canonicalUrl="https://onetapxmedia.com/solutions/restaurant"
      />

      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
        height="h-[800px]"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Restaurant Marketing Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Fill your tables and grow your restaurant with targeted digital marketing
            </motion.p>
          </div>
        </div>
      </ParallaxSection>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Restaurant Marketing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions to help your restaurant thrive
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              See how we've helped restaurants grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fine Dining Restaurant',
                result: '+200% Reservations',
                image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80'
              },
              {
                title: 'Casual Dining Chain',
                result: '+150% Online Orders',
                image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80'
              },
              {
                title: 'Local Bistro',
                result: '+300% Local Traffic',
                image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                    <p className="text-primary-200">{story.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Fill More Tables?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Get a free consultation and marketing plan tailored to your restaurant
            </p>
            <button 
              onClick={handleGetStarted}
              className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors"
            >
              Get Your Free Plan
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;