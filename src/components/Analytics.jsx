import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Send pageview to Google Analytics
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null; // This component doesn't render anything
}