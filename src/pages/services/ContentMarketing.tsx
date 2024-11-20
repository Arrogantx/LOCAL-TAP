import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Edit, BarChart2, Target, Search, Share2, Award } from 'lucide-react';
import SEOHelmet from '../../components/SEOHelmet';
import ParallaxSection from '../../components/ParallaxSection';

const features = [
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'Data-driven content planning aligned with your business goals.',
    link: 'https://contentmarketinginstitute.com/articles/content-marketing-strategy/'
  },
  {
    icon: Edit,
    title: 'Content Creation',
    description: 'Professional content that engages and converts your audience.',
    link: 'https://www.copyblogger.com/content-marketing/'
  },
  {
    icon: Search,
    title: 'SEO Content',
    description: 'Content optimized for search engines and user intent.',
    link: 'https://moz.com/blog/content-strategy'
  },
  {
    icon: Target,
    title: 'Content Distribution',
    description: 'Strategic content promotion across multiple channels.',
    link: 'https://buffer.com/library/content-distribution-strategy/'
  },
  {
    icon: BarChart2,
    title: 'Performance Analytics',
    description: 'Track and measure content marketing ROI.',
    link: 'https://www.semrush.com/blog/content-marketing-analytics/'
  },
  {
    icon: Share2,
    title: 'Content Promotion',
    description: 'Amplify your content reach and engagement.',
    link: 'https://neilpatel.com/blog/content-promotion-strategies/'
  }
];

const contentTypes = [
  {
    title: 'Blog Posts & Articles',
    description: 'Informative content that establishes thought leadership',
    metrics: ['SEO Optimization', 'Lead Generation', 'Brand Authority']
  },
  {
    title: 'White Papers & Guides',
    description: 'In-depth resources for lead generation',
    metrics: ['Lead Magnets', 'Industry Expertise', 'Email List Building']
  },
  {
    title: 'Video Content',
    description: 'Engaging visual content for multiple platforms',
    metrics: ['Brand Awareness', 'Social Engagement', 'Product Demos']
  },
  {
    title: 'Email Newsletters',
    description: 'Nurture leads and maintain customer relationships',
    metrics: ['Customer Retention', 'Sales Conversion', 'Brand Loyalty']
  }
];

const ContentMarketing = () => {
  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="Content Marketing Services Philadelphia | Expert Content Strategy"
        description="Transform your content marketing with our expert services in Philadelphia. Data-driven content strategies that engage your audience and drive conversions."
        keywords="content marketing philadelphia, content strategy, content creation, seo content, content distribution"
        canonicalUrl="https://onetapxmedia.com/services/content-marketing"
      />

      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
        height="h-[800px]"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Content Marketing Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Create compelling content that drives engagement and conversions
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
                <FileText className="ml-2 w-5 h-5" />
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
            <h2 className="text-4xl font-bold mb-4">Our Content Marketing Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive content solutions to grow your brand
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

      {/* Content Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Content Types</h2>
            <p className="text-xl text-gray-600">
              Diverse content formats to reach your audience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <FileText className="w-4 h-4 text-primary-600 mr-2" />
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
            <h2 className="text-4xl font-bold mb-4">Content Marketing Results</h2>
            <p className="text-xl text-gray-600">
              Real results from our content marketing campaigns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '+185%', label: 'Organic Traffic' },
              { metric: '+210%', label: 'Lead Generation' },
              { metric: '+165%', label: 'Conversion Rate' }
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
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Get a free content audit and strategy consultation
            </p>
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors inline-flex items-center"
            >
              Schedule Consultation
              <FileText className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContentMarketing;