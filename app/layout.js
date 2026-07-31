import './styles/style.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/stats.css';
import './styles/legacy.css';
import './styles/gallery.css';
import './styles/testimonials.css';
import './styles/footer.css';
import GTM, { GTMNoScript } from '../components/GTM';

export const metadata = {
  title: 'Carlton Wellness Group | Own a Premium Wellness Spa Franchise',
  description: 'Partner with Carlton Wellness Group to build a premium wellness business through a professionally managed FOCO/FICO business model. Capital from ₹75 Lakhs, revenue share up to 20%.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Liberation+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <GTM />
      </head>
      <body>
        <GTMNoScript />
        {children}
      </body>
    </html>
  );
}
