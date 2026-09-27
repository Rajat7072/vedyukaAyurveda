import React from 'react'
import maleresults from '../images/maleResults.jpeg'
import femaleresults from '../images/femaleResults.jpeg'

const Results = () => {
    return (
        <section className='results-section' id='results'>
            <div className='section-heading'>
                <span className='eyebrow'>Visible results</span>
                <h2>Results before and after treatment</h2>
            </div>

            <div className='results'>
                <figure className='results-card'>
                    <img
                        src={maleresults}
                        alt='Male hair care transformation before and after using Vedyuka Ayurveda products'
                        className='results-image'
                        loading='lazy'
                        decoding='async'
                    />
                    <figcaption>Hair strength and shine transformation</figcaption>
                </figure>

                <figure className='results-card'>
                    <img
                        src={femaleresults}
                        alt='Female hair care transformation before and after using Vedyuka Ayurveda products'
                        className='results-image'
                        loading='lazy'
                        decoding='async'
                    />
                    <figcaption>Healthy, nourished hair from natural care</figcaption>
                </figure>
            </div>
        </section>
    )
}

export default Results