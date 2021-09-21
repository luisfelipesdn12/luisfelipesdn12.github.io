import React from 'react';
import Footer from '../src/components/parts/Footer';
import Hero from '../src/components/parts/Hero';
import Skills from '../src/components/parts/Skills';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Skills />
            <Footer />
        </>
    );
};

export default Home;
