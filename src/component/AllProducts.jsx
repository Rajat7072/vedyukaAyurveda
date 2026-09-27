import React from 'react'
import data from '../data/data'

const AllProducts = () => {
    return (
        <section className='all-products-section' id='products'>
            <div className='section-heading'>
                <span className='eyebrow'>Our Ayurveda essentials</span>
                <h2>Natural herbal hair care for every routine</h2>
            </div>

            <div className='all-products'>
                {data.map((item, index) => (
                    <article key={index} className='product-card'>
                        <div className='product-image-wrap'>
                            <img
                                src={item.image}
                                alt={`${item.name} by Vedyuka Ayurveda`}
                                loading='lazy'
                                decoding='async'
                            />
                        </div>
                        <div className='product-content'>
                            <h3>{item.name}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p className='product-price'>Price: {item.price}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default AllProducts