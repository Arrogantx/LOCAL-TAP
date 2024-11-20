import React from 'react';
import { useModalStore } from '../store/modalStore';
import StatComponent from '../components/stat'; // Adjust the path as needed
import { FaGlobe as Globe, FaRocket as Rocket, FaArrowRight as ArrowRight, FaBolt as Zap } from 'react-icons/fa'; // Example icons


const Hero = () => {
  const { setActiveModal } = useModalStore();

  const handleGetStarted = () => {
    setActiveModal('onboarding');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 to-primary-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="w-full">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-8 mx-auto">
              <Zap size={16} className="mr-2" />
              <span className="text-sm font-medium">Innovative Digital Marketing</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
              Reimagine Your <span className="text-primary-400">Digital Presence</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Position your brand for success.<br></br> We combine our industry-agnostic expertise with data-driven strategies to deliver measurable results.<br></br><strong> We turn clicks into customers.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex flex-col items-center">
                <button
                  onClick={handleGetStarted}
                  className="flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors animate-pulse"
                >
                  <strong>Get Started</strong>
                  <ArrowRight size={20} className="ml-2" />
                </button>
                <p className="text-sm text-white mt-2 italic">
                  Start your free consultation today.
                </p>
              </div>
            </div>

            
       
 
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-primary-500/20 to-transparent rounded-full" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-primary-500/20 to-transparent rounded-full" />
      </div>
        </div>
      </div>
    </div>
    </section>
  );
};

interface StatProps {
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
  value: string;
  label: string;
}


const Stat: React.FC<StatProps> = ({ icon: Icon, value, label }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
      <Icon width={24} height={24} className="text-white" />
    </div>
    <div className="text-white text-left">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-gray-200">{label}</div>
    </div>
  </div>
);

export default Hero;