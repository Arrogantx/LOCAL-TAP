import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useModalStore } from '../store/modalStore';

declare global {
  interface Window {
    tf: any;
  }
}

const TypeFormModal = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const { activeModal, setActiveModal } = useModalStore();
  const isVisible = activeModal === 'typeform';

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleDismiss = () => {
    setActiveModal(null);
    setIsDismissed(true);
    localStorage.setItem('typeformDismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            onClick={handleDismiss}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: {
                type: "spring",
                damping: 15,
                stiffness: 300,
                mass: 0.8
              }
            }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-white rounded-xl shadow-2xl z-[61] modal-container"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-[62] bg-white rounded-full shadow-md"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="w-full h-full modal-content">
              <div
                data-tf-live="01HV53EW6ZWY25PRRDW6BR716X"
                className="typeform-embed"
                style={{ 
                  width: '100%', 
                  height: '100%',
                  border: 'none',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TypeFormModal;