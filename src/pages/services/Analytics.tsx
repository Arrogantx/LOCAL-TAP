import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, PieChart, LineChart, TrendingUp, Target, Search } from 'lucide-react';
import ParallaxSection from '../../components/ParallaxSection';
import SEOHelmet from '../../components/SEOHelmet';

const features = [
  {
    icon: BarChart2,
    title: 'Performance Tracking',
    description: 'Monitor key metrics and KPIs in real-time.'
  },
  {
    icon: PieChart,
    title: 'Data Analysis',
    description: 'Extract meaningful insights from your data.'
  },
  {
    icon: LineChart,
    title: 'Trend Analysis',
    description: 'Identify patterns and predict future trends.'
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Track progress towards your business objectives.'
  },
  {
    icon: Search,
    title: 'Custom Reports',
    description: 'Detailed reports tailored to your needs.'
  },
  {
    icon: TrendingUp,
    title: 'Growth Analysis',
    description: 'Measure and optimize business growth.'
  }
];

const Analytics = () => {
  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="Analytics & Reporting Services | Data-Driven Marketing Insights"
        description="Transform your marketing data into actionable insights with our comprehensive analytics and reporting services. Make data-driven decisions that drive growth."
        keywords="marketing analytics, data analysis, business intelligence, marketing reporting, performance tracking, ROI measurement"
        canonicalUrl="https://onetapxmedia.com/services/analytics"
      />

      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
        height="h-[800px]"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Analytics & Reporting
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Turn data into actionable insights for your business
            </motion.p>
          </div>
        </div>
      </ParallaxSection>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </div>
  );
};

export default Analytics;