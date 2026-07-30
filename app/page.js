import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Legacy from '../components/Legacy';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Legacy />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
