import React from 'react'

const Navbar = () => {
    return (
        <header className='header'>
            <img src={"/logo.png"} className='header-logo' />
            <nav className='header-nav'>
                <a>Home</a>
                <a>About</a>
                <a>Steam Cell Banking</a>
                <a>Getting Started</a>
                <a>Pregancy</a>
                <a>Blog</a>
                <a>Gallery</a>
                <a>Contact</a>
            </nav>
        </header>
    )
}

export default Navbar