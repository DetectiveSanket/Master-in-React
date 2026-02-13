import React from 'react'
import Homee from '../Components/Home';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';

function Home() {
    return (
        <div style={{ fontSize: '2rem' }}>
            <h1>Welcome to Online Education</h1>
            <p>Learn from the best online courses and tutorials</p>
            <button onClick={() => alert('Welcome to Online Education')} style={{ fontSize: '1.5rem' }}>Get Started</button>

            <Homee />
            <Hero />
            <Footer />
        </div>
    )
}
export default Home;