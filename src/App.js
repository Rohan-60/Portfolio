import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Skills from './components/skills/Skills.jsx';
import Services from './components/services/Services.jsx';
import Qualification from './components/qualification/Qualification.jsx';
/*import Testimonial from './components/testimonial/Testimonial.jsx';*/
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';
import Scrollup from './components/scrollup/Scrollup.jsx';
import Work from './components/work/Work.jsx';
function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        {/*<Services />*/}
        <Qualification />
        <Work />
        {/*<Testimonial />*/}
        <Contact />

      </main>
      <Footer />
      <Scrollup />
    </>
  )
}
export default App;
