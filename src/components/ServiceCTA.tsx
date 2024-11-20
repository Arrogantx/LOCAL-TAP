import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useModalStore } from '../store/modalStore';

interface ServiceCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  image?: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
  title = "Ready to Get Started?",
  description = "Schedule a consultation to discuss your digital marketing needs.",
  buttonText = "Book Your Consultation",
  image = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
}) => {
  const { setActiveModal } = useModalStore();

  const handleClick = () => {
    setActiveModal('onboarding');
  };

  return (
    <section className="py-20 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {description}
            </p>
            <button 
              onClick={handleClick}
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors"
            >
              {buttonText}
              <ArrowRight size={20} className="ml-2" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
            onClick={handleClick}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="Schedule a consultation"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/70 transition-colors" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform group-hover:-translate-y-2 transition-transform">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Book Your Free Strategy Session
                  </h3>
                  <p className="text-white/90 mb-4">
                    Get expert insights and a customized growth plan for your business
                  </p>
                  <div className="inline-flex items-center text-primary-200 group-hover:text-primary-300 transition-colors">
                    Click to Schedule
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;