import React, { useEffect } from 'react';
import { useModalStore } from '../store/modalStore'; // Import modal store
import { createPopup } from '@typeform/embed';
import '@typeform/embed/build/css/popup.css'; // Import Typeform popup CSS

declare global {
  interface Window {
    disableChatWidget: boolean;
  }
}



const OnboardingModal = () => {
  const { activeModal, setActiveModal, closeModal } = useModalStore();

  // Handle body overflow for modal state changes
  useEffect(() => {
    if (activeModal === 'onboarding') {
      try {
        // Disable the chat widget
        window.disableChatWidget = true;
  
        const { toggle } = createPopup('RByqvvcG', {
          autoClose: false,
          hideHeaders: true,
          hideFooter: true,
          onSubmit: () => {
            console.log('Typeform submitted');
            closeModal();
          },
          onClose: () => {
            closeModal();
          },
        });
  
        toggle();
  
        document.body.style.overflow = 'hidden';
      } catch (error) {
        console.error('Error creating Typeform popup:', error);
      }
    } else {
      // Re-enable the chat widget
      window.disableChatWidget = false;
      document.body.style.overflow = 'auto';
    }
  
    return () => {
      window.disableChatWidget = false;
      document.body.style.overflow = 'auto';
    };
  }, [activeModal, closeModal]);
  
  

  const handleOpenTypeform = () => {
    setActiveModal('onboarding'); // Set modal type to 'onboarding'
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleOpenTypeform}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition duration-200"
      >
        Start Onboarding
      </button>
    </div>
  );
};

export default OnboardingModal;
