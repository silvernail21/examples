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
        <title>Brandner Communications — Enterprise Communications Intelligence</title>
        <meta
          name="description"
          content="Brandner delivers enterprise-grade communications intelligence for Fortune 500 companies. SOC 2, HIPAA compliant. 500+ clients. Contact Sales today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Brandner Communications — Enterprise Communications Intelligence" />
        <meta property="og:description" content="Communications that move markets. Trusted by 500+ enterprise clients worldwide." />
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
