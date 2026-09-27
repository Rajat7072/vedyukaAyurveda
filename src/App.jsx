import { useEffect } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import OurProduct from './component/OurProduct'
import AllProducts from './component/AllProducts'
import Results from './component/Results'
import GetInTouch from './component/GetInTouch'
import TermsAndConditions from './component/TermsAndConditions'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vedyuka Ayurveda',
  url: 'https://www.vedyukaayurveda.com/',
  description:
    'Vedyuka Ayurveda offers Ayurvedic hair care, natural herbal shampoo, and holistic hair care rituals designed for healthy, radiant hair.',
  slogan: 'Ayurvedic hair care inspired by nature',
  keywords: [
    'Ayurvedic hair care',
    'natural herbal shampoo',
    'Vedyuka Ayurveda',
    'herbal hair oil',
    'herbal hair mask',
  ],
  areaServed: 'India',
  sameAs: [],
}

function App() {
  useEffect(() => {
    document.title = 'Vedyuka Ayurveda | Ayurvedic Hair Care & Natural Herbal Shampoo'

    const descriptionMeta = document.querySelector('meta[name="description"]')
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        'content',
        'Discover Vedyuka Ayurveda for Ayurvedic hair care, natural herbal shampoo, and nourishing hair oil and masks designed to restore strength and shine.'
      )
    }

    const keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (keywordsMeta) {
      keywordsMeta.setAttribute(
        'content',
        'Ayurvedic hair care, natural herbal shampoo, Vedyuka Ayurveda, herbal hair oil, herbal hair mask'
      )
    }
  }, [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="page-shell">
        <span className="leaf leaf-one" aria-hidden="true" />
        <span className="leaf leaf-two" aria-hidden="true" />
        <span className="leaf leaf-three" aria-hidden="true" />

        <Navbar />

        <main className="site-main">
          <OurProduct />
          <AllProducts />
          <Results />
          <GetInTouch />
        </main>

        <TermsAndConditions />
      </div>
    </>
  )
}

export default App
