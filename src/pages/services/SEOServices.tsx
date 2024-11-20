import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart2, Target, Award, Users, Globe, Link as LinkIcon, FileText } from 'lucide-react';
import SEOHelmet from '../../components/SEOHelmet';

const features = [
  {
    icon: Search,
    title: 'Technical SEO',
    description: 'Comprehensive technical audits and optimization to improve search engine crawlability and indexation.',
    link: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide'
  },
  {
    icon: BarChart2,
    title: 'On-Page SEO',
    description: 'Strategic optimization of content, meta elements, and internal linking for maximum visibility.',
    link: 'https://moz.com/learn/seo/on-page-factors'
  },
  {
    icon: LinkIcon,
    title: 'Link Building',
    description: 'High-quality backlink acquisition from authoritative sources to boost domain authority.',
    link: 'https://ahrefs.com/blog/link-building/'
  },
  {
    icon: Users,
    title: 'Local SEO',
    description: 'Dominate local search results and attract nearby customers with location-based optimization.',
    link: 'https://www.searchenginejournal.com/local-seo/'
  },
  {
    icon: Globe,
    title: 'International SEO',
    description: 'Expand your global reach with multilingual and multi-regional SEO strategies.',
    link: 'https://www.semrush.com/blog/international-seo/'
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'Data-driven content planning and creation that aligns with search intent.',
    link: 'https://contentmarketinginstitute.com/articles/'
  }
];

const process = [
  {
    title: 'SEO Audit',
    description: 'Comprehensive analysis of your current SEO performance and competitive landscape.'
  },
  {
    title: 'Strategy Development',
    description: 'Custom SEO roadmap based on data-driven insights and business goals.'
  },
  {
    title: 'Implementation',
    description: 'Expert execution of technical, on-page, and off-page optimizations.'
  },
  {
    title: 'Monitoring & Optimization',
    description: 'Continuous tracking and refinement for sustained search ranking improvements.'
  }
];

const results = [
  {
    metric: '+150%',
    label: 'Organic Traffic',
    description: 'Average increase in monthly organic visitors'
  },
  {
    metric: '#1',
    label: 'Rankings',
    description: 'For competitive target keywords'
  },
  {
    metric: '+200%',
    label: 'Conversions',
    description: 'Growth in organic lead generation'
  }
];

const SEOServices = () => {
  return (
    <div className="min-h-screen">
      <SEOHelmet
        title="SEO Services Philadelphia | Expert Search Engine Optimization"
        description="Transform your online visibility with our expert SEO services in Philadelphia. Data-driven strategies that deliver measurable results. Get a free SEO audit today!"
        keywords="seo services philadelphia, search engine optimization, local seo, technical seo, link building, content optimization"
        canonicalUrl="https://onetapxmedia.com/services/seo"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Philadelphia SEO Services That Drive <span className="text-primary-600">Real Results</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Partner with Philadelphia's leading SEO agency to improve your search rankings and drive qualified organic traffic to your website.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#audit"
                  className="px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors"
                >
                  Get Free SEO Audit
                </a>
                <a
                  href="#pricing"
                  className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-full hover:bg-primary-50 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="SEO Analytics Dashboard showing improved search rankings"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Comprehensive SEO Solutions</h2>
            <p className="text-xl text-gray-600">
              Data-driven strategies to improve your search visibility and drive organic growth
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
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our SEO Process</h2>
            <p className="text-xl text-gray-600">
              A proven methodology for sustainable search ranking improvements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <ProcessStep key={index} {...step} index={index} />
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
            <h2 className="text-4xl font-bold mb-4">Real Results</h2>
            <p className="text-xl text-gray-600">
              See what we've achieved for our Philadelphia clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <ResultCard key={index} {...result} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600" id="audit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Improve Your Search Rankings?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Get a comprehensive SEO audit and discover untapped opportunities for your website.
            </p>
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors inline-flex items-center"
            >
              Get Your Free SEO Audit
              <Target className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ProcessStep = ({ title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="text-center"
  >
    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <span className="text-2xl font-bold text-primary-600">{index + 1}</span>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const ResultCard = ({ metric, label, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="text-center p-8 bg-primary-50 rounded-xl"
  >
    <div className="text-4xl font-bold text-primary-600 mb-2">{metric}</div>
    <div className="text-xl font-semibold mb-2">{label}</div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default SEOServices;