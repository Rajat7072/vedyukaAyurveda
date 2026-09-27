import React from 'react'
import visitingcard from '../images/visitingCard.jpeg'

const OurProduct = () => {
    return (
        <section className='our-product' id='product'>
            <div className='product-copy'>
                <span className='eyebrow'>Ayurvedic hair care</span>
                <h1>Natural herbal shampoo and care rituals for hair that feels healthy, strong, and radiant.</h1>
                <p>
                    Vedyuka Ayurveda brings together age-old wisdom and modern wellness to deliver a premium range
                    of herbal hair care products rooted in purity, nourishment, and balance.
                </p>

                <ul className='benefit-list'>
                    <li>Nourishment from Nature: Vedyuka Ayurveda brings you herbal hair mask, oil, and shampoo crafted with age‑old Ayurvedic wisdom for healthy, radiant hair.</li>
                    <li>Holistic Hair Care: Our products combine natural herbs and traditional formulations to strengthen roots, reduce hair fall, and restore shine.</li>
                    <li>Ayurvedic Purity: Free from harsh chemicals, Vedyuka Ayurveda ensures gentle care with authentic herbal ingredients.</li>
                    <li>Complete Care Ritual: From cleansing to deep nourishment, our shampoo, oil, and mask work together for stronger, smoother, and revitalized hair.</li>
                    <li>Tradition Meets Science: Inspired by Ayurveda, perfected with modern care — Vedyuka Ayurveda is your path to naturally beautiful hair.</li>
                </ul>

                <div className='cta-row'>
                    <a href='#products' className='primary-btn'>Explore Products</a>
                    <a href='#contact' className='secondary-btn'>Ask an Expert</a>
                </div>
            </div>

            <div className='product-visual'>
                <div className='image-frame'>
                    <img
                        src={visitingcard}
                        alt='Vedyuka Ayurveda herbal hair care product collection and premium Ayurvedic brand card'
                        className='visiting-card'
                        loading='eager'
                    />
                </div>
            </div>
        </section>
    )
}

export default OurProduct