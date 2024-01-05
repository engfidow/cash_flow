import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Brands from '../components/Brands';
import Feature1 from '../components/Feature1';
import Feature2 from '../components/Feature2';
import Feature3 from '../components/Feature3';
import Product from '../components/Product';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ContactInfo from '../components/ContactInfo';
import ScrollToTopButton from '../components/ScrollToTopButton';
const Home = () => {
  return (
    <div className='overflow-hidden'>
    <ScrollToTopButton/>
    <Header />
    
    <Hero />
    <Overview />
    <Brands />
    <Feature1 />
    <Feature2 />
    <Feature3 />
    <Product />
    <Pricing />
    <Testimonials />
    <ContactInfo/>
    <Contact/>
    <Cta />
    <Footer />
  
    {/* <Login /> */}
  </div>
  )
}

export default Home
