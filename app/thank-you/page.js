import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ThankYouTracker from '../../components/ThankYouTracker';
import Link from 'next/link';

export const metadata = {
  title: 'Thank You | Carlton Wellness Group',
  description: 'Thank you for your interest in Carlton Wellness Group.',
};

export default function ThankYou() {
  return (
    <>
      <ThankYouTracker />
      <Header />
      <main style={{ 
        padding: '120px 0', 
        textAlign: 'center', 
        minHeight: '60vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="container">
          <h1 className="section-heading">Thank You!</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto', color: 'var(--text-gray)' }}>
            We have received your commercial request. Our partnership team will review your details and get in touch with you shortly.
          </p>
          <Link href="/" className="btn btn-navy" style={{ display: 'inline-block' }}>
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
