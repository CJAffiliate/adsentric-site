import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import TestimonialStrip from './components/TestimonialStrip'
import ProcessSection from './components/ProcessSection'
import ScrollingAdsSection from './components/ScrollingAdsSection'
import FAQSection from './components/FAQSection'
import AuditFormSection from './components/AuditFormSection'
import Footer from './components/Footer'
import './styles/animations.css'

function App() {
  return (
    <div style={{ 
      width: '100%',
      overflowX: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <NavBar />
      <main style={{ flex: 1 }}>
        <Hero />
        <TestimonialStrip />
        <ProcessSection />
        <ScrollingAdsSection />
        <FAQSection />
        <AuditFormSection />
      </main>
      <Footer />
    </div>
  )
}

export default App 