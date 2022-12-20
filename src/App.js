import About from './components/About/About';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Partners } from './components/Partners/Partners';
import { Layout } from './components/Layout/Layout';
import { Blog } from './components/Blog/Blog';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <Portfolio />
        <Partners />
        <About />
        <Blog />
        <Contact />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
