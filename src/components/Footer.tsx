import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">OneTap Media</h3>
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative digital marketing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/onetapxmedia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/onetapxmedia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/onetapxmedia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/company/onetapxmedia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

         {/* Services */}
<div>
  <h4 className="text-lg font-semibold mb-4">Services</h4>
  <ul className="space-y-2">
    <li>
      <a
        href="/services/seo"
        className="text-gray-400 hover:text-white transition-colors"
      >
        SEO Services
      </a>
    </li>
    <li>
      <a
        href="/services/ppc"
        className="text-gray-400 hover:text-white transition-colors"
      >
        PPC Management
      </a>
    </li>
    <li>
      <a
        href="/services/social-media"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Social Media Marketing
      </a>
    </li>
    <li>
      <a
        href="/services/content-marketing"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Content Marketing
      </a>
    </li>
    <li>
      <a
        href="/services/analytics"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Analytics & Reporting
      </a>
    </li>
    <li>
      <a
        href="/services/web-design"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Web Design
      </a>
    </li>
    <li>
      <a
        href="/services/custom-development"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Custom Development
      </a>
    </li>
    <li>
      <a
        href="/services/ai-consulting"
        className="text-gray-400 hover:text-white transition-colors"
      >
        AI Consulting
      </a>
    </li>
  </ul>
</div>

{/* Company */}
<div>
  <h4 className="text-lg font-semibold mb-4">Company</h4>
  <ul className="space-y-2">
    <li>
      <a
        href="/about"
        className="text-gray-400 hover:text-white transition-colors"
      >
        About Us
      </a>
    </li>
    <li>
      <a
        href="/careers"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Careers
      </a>
    </li>
    <li>
      <a
        href="/resources/case-studies"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Case Studies
      </a>
    </li>
    <li>
      <a
        href="/resources"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Resources
      </a>
    </li>
    <li>
      <a
        href="/contact"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Contact
      </a>
    </li>
    <li>
      <a
        href="/resources/blog"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Blog
      </a>
    </li>
    <li>
      <a
        href="/resources/webinars"
        className="text-gray-400 hover:text-white transition-colors"
      >
        Webinars
      </a>
    </li>
  </ul>
</div>


          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={20} className="text-primary-500 mr-2" />
                <a href="mailto:contact@onetapxmedia.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@onetapxmedia.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-500 mr-2" />
                <a href="tel:+12678177323" className="text-gray-400 hover:text-white transition-colors">
                  (267) 817-7323
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={20} className="text-primary-500 mr-2" />
                <a 
                  href="https://www.google.com/maps/place/1500+Chestnut+St+STE+2,+Philadelphia,+PA+19102" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  1500 Chestnut ST STE 2<br />
                  Philadelphia, PA 19102
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} OneTap Media. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;