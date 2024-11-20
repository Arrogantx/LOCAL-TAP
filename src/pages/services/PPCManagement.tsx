import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart2, Users2, DollarSign, Search, Zap, Award } from 'lucide-react';
import SEOHelmet from '../../components/SEOHelmet';
import ParallaxSection from '../../components/ParallaxSection';

const features = [
  {
    icon: Target,
    title: 'Strategic Campaign Management',
    description: 'Data-driven PPC campaigns optimized for maximum ROI.',
    link: 'https://www.wordstream.com/ppc'
  },
  {
    icon: BarChart2,
    title: 'Performance Analytics',
    description: 'Real-time monitoring and optimization of campaign metrics.',
    link: 'https://analytics.google.com/analytics/academy/'
  },
  {
    icon: DollarSign,
    title: 'Budget Optimization',
    description: 'Strategic budget allocation to maximize advertising spend.',
    link: 'https://support.google.com/google-ads/answer/6154846'
  },
  {
    icon: Search,
    title: 'Keyword Research',
    description: 'In-depth keyword analysis for targeted ad campaigns.',
    link: 'https://ads.google.com/home/tools/keyword-planner/'
  },
  {
    icon: Users2,
    title: 'Audience Targeting',
    description: 'Precise audience segmentation for higher conversion rates.',
    link: 'https://support.google.com/google-ads/answer/2497941'
  },
  {
    icon: Zap,
    title: 'Conversion Optimization',
    description: 'Continuous testing and optimization for better results.',
    link: 'https://www.thinkwithgoogle.com/marketing-strategies/search/conversion-rate-optimization-tips/'
  }
];

const platforms = [
  {
    name: 'Google Ads',
    description: 'Reach customers actively searching for your products or services.',
    metrics: ['Search campaigns', 'Display network', 'Shopping ads']
  },
  {
    name: 'Meta Ads',
    description: 'Target users across Facebook and Instagram platforms.',
    metrics: ['Feed ads', 'Stories', 'Marketplace']
  },
  {
    name: 'LinkedIn Ads',
    description: 'Connect with professional audiences and B2B customers.',
    metrics: ['Sponsored content', 'Message ads', 'Dynamic ads']
  }
];

const PPCManagement = () => {
  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="PPC Management Services Philadelphia | Expert Paid Advertising"
        description="Maximize your ROI with our expert PPC management services in Philadelphia. Data-driven paid advertising strategies across Google, Meta, and LinkedIn platforms."
        keywords="ppc management philadelphia, google ads management, facebook ads, paid advertising, social media advertising"
        canonicalUrl="https://onetapxmedia.com/services/ppc"
      />

      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
        height="h-[800px]"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              PPC Management Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Drive targeted traffic and maximize ROI with our expert paid advertising management
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors inline-flex items-center"
              >
                Get Started
                <Target className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-4">Comprehensive PPC Solutions</h2>
            <p className="text-xl text-gray-600">
              Data-driven paid advertising strategies that deliver measurable results
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
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <Award className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Advertising Platforms</h2>
            <p className="text-xl text-gray-600">
              Strategic advertising across major platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                <ul className="space-y-2">
                  {platform.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Target className="w-4 h-4 text-primary-600 mr-2" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Client Success</h2>
            <p className="text-xl text-gray-600">
              Real results from our PPC campaigns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '300%', label: 'Average ROI' },
              { metric: '-35%', label: 'Cost Per Acquisition' },
              { metric: '+150%', label: 'Conversion Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-primary-50 rounded-xl"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.metric}
                </div>
                <div className="text-gray-600">{stat.label}</div>
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
              Ready to Maximize Your Ad Spend?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Get a free PPC audit and discover opportunities to improve your campaigns
            </p>
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors inline-flex items-center"
            >
              Schedule Consultation
              <Target className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PPCManagement;