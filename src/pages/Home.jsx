import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import NewArrivals from '../components/NewArrivals'
import Banner from '../components/Banner'
import About from '../components/About'
import Blog from '../components/Blog'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <NewArrivals />
            <Banner />
            <About />
            <Blog />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default Home
