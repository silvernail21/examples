import { useState } from 'react'
import Head from 'next/head'
import Preloader from '../components/Preloader'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ClientLogos from '../components/ClientLogos'
import SolutionsTabs from '../components/SolutionsTabs'
import RoleCards from '../components/RoleCards'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import ContactSales from '../components/ContactSales'
import Footer from '../components/Footer'

export default function Home() {
  const [preloaded, setPreloaded] = useState(false)

  return (
    <>
      <Head>
        <title>Brandner — Creative Advertising Agency</title>
        <meta name="description" content="Full-service creative advertising agency specializing in branding, 3D design, web, PR, and marketing. 30+ years of craft. Federal Way, WA." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Brandner — Creative Advertising Agency" />
        <meta property="og:description" content="We build brands that mean something. Brave ideas and relentless craft since 1994." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {!preloaded && <Preloader onComplete={() => setPreloaded(true)} />}

      <Navbar />

      <main>
        <Hero />
        <ClientLogos />
        <SolutionsTabs />
        <RoleCards />
        <Stats />
        <Testimonials />
        <ContactSales />
      </main>

      <Footer />
    </>
  )
}
