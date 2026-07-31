'use client';

import { useEffect } from 'react';

/**
 * Pushes an explicit dataLayer event when the thank-you page is shown, so the
 * conversion tag can use a deterministic Custom Event trigger
 * ("thank_you_page_view") instead of relying on page-view triggers.
 * Same event name is used on the other landing pages, so one GTM trigger
 * setup works everywhere.
 */
export default function ThankYouTracker() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'thank_you_page_view',
      page_path: '/thank-you',
      page_location: window.location.href,
      page_title: document.title,
    });
  }, []);

  return null;
}
