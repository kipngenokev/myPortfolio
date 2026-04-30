import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Work from './components/Work.jsx';
import Approach from './components/Approach.jsx';
import Skills from './components/Skills.jsx';
import Why from './components/Why.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Approach />
        <Skills />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
