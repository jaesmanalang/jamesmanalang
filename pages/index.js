import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import Projects from '@components/Projects';
import About from '@components/About';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="pt-16" id="top">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}
