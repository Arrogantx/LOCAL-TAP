import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

// Declare global interface for LiveChatWidget
declare global {
  interface Window {
    LiveChatWidget: any;
  }
}

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <ParallaxProvider>
            <App />
          </ParallaxProvider>
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}

// Add LiveChat widget management logic
document.addEventListener("DOMContentLoaded", function () {
  const modalSelector = '.ContentWrapper-sc-__sc-1ks3v0d-5'; // Modal selector
  const liveChatSelector = '.lc-h5qda7'; // Live Chat widget's parent container selector

  // Get the modal and LiveChat widget elements
  const modalElement = document.querySelector(modalSelector) as HTMLElement | null;
  const liveChatElement = document.querySelector(liveChatSelector) as HTMLElement | null;

  if (modalElement && liveChatElement) {
    // Create a MutationObserver to track modal visibility changes
    const observer = new MutationObserver(function () {
      const isModalVisible =
        modalElement.style.display !== 'none' &&
        modalElement.getBoundingClientRect().height > 0;

      if (isModalVisible) {
        // Hide LiveChat widget when modal is active
        liveChatElement.style.display = 'none';
      } else {
        // Show LiveChat widget when modal is inactive
        liveChatElement.style.display = 'block';
      }
    });

    // Observe the modal for style and class attribute changes
    observer.observe(modalElement, { attributes: true, attributeFilter: ['style', 'class'] });

    // Optional: Clean up the observer when the page unloads
    window.addEventListener('beforeunload', () => observer.disconnect());
  } else {
    console.warn('Modal or LiveChat element not found');
  }
});
