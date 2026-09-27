import React from 'react'

const Navbar = () => {
    return (
        <header className='navbar-shell'>
            <div className='brand-block' aria-label='Vedyuka Ayurveda home'>
                <span className='brand-badge'>V</span>
                <div className='brand-copy'>
                    <strong>Vedyuka</strong>
                    <span>Ayurveda</span>
                </div>
            </div>

            <nav className='main-nav' aria-label='Main navigation'>
                <a href='#product'>Our Product</a>
                <a href='#products'>Products</a>
                <a href='#results'>Results</a>
                <a href='#contact'>Get in Touch</a>
            </nav>

            <a href='#contact' className='nav-cta'>Consult Now</a>
        </header>
    )
}

export default Navbar