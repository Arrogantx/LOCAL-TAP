import React from 'react';
import { motion } from 'framer-motion';
import { Store, Package, Truck, BarChart2, Target, Users } from 'lucide-react';
import ParallaxSection from '../../components/ParallaxSection';
import SEOHelmet from '../../components/SEOHelmet';

const features = [
  {
    icon: Store,
    title: 'Omnichannel Presence',
    description: 'Seamlessly integrate online and in-store shopping experiences.'
  },
  {
    icon: Package,
    title: 'Product Showcase',
    description: 'Stunning visual presentations of your furniture collections.'
  },
  {
    icon: Truck,
    title: 'Delivery Management',
    description: 'Streamlined logistics and delivery tracking solutions.'
  },
  {
    icon: BarChart2,
    title: 'Inventory Analytics',
    description: 'Real-time inventory tracking and sales analytics.'
  },
  {
    icon: Target,
    title: 'Local Marketing',
    description: 'Targeted campaigns to reach local furniture shoppers.'
  },
  {
    icon: Users,
    title: 'Customer Experience',
    description: 'Enhanced customer service and engagement strategies.'
  }
];

const FurnitureStore = () => {
  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="Furniture Store Marketing Solutions | Digital Marketing for Furniture Retailers"
        description="Transform your furniture store's digital presence with our specialized marketing solutions. Drive foot traffic, boost online sales, and grow your furniture business."
        keywords="furniture store marketing, furniture retail marketing, furniture store digital marketing, furniture store SEO, furniture store advertising"
        canonicalUrl="https://onetapxmedia.com/solutions/furniture-store"
      />

      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80"
        height="h-[800px]"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Furniture Store Marketing Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Drive more sales with targeted digital marketing for furniture retailers
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
            <h2 className="text-4xl font-bold mb-4">Comprehensive Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to grow your furniture business online and in-store
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
              See how we've helped furniture retailers grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Modern Furniture Store',
                result: '+200% Online Sales',
                image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80'
              },
              {
                title: 'Home Decor Retailer',
                result: '+150% Store Visits',
                image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80'
              },
              {
                title: 'Luxury Furniture Brand',
                result: '+300% Leads',
                image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80'
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
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Furniture Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Get a free consultation and marketing plan tailored to your furniture store
            </p>
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
              Get Your Free Plan
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FurnitureStore;