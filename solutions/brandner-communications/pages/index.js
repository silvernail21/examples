import Head from 'next/head'
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
  return (
    <>
      <Head>
        <title>Brandner Communications — Building Products Marketing Agency</title>
        <meta name="description" content="Full-service advertising and PR agency specializing in building products. 30+ years of expertise in commercial and residential building products marketing. Federal Way, WA." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Brandner Communications — Building Products Marketing Agency" />
        <meta property="og:description" content="Proud to be different for 30+ years. Full-service advertising, PR, and digital marketing for the building industry." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

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
