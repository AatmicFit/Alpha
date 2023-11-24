"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


const Navbar = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
      setNavOpen(!isNavOpen);
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-5 d-block backdrop padding-transition shadow-nav" data-navbar-on-scroll="data-navbar-on-scroll">
                <div className="container"><Link className="navbar-brand" href="/"><img src="https://ik.imagekit.io/aatmicfit/Website/Custom/png.jpeg" height={50} alt="logo" /></Link>
                    <button className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`} type="button" onClick={toggleNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0 ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base align-items-lg-center align-items-start">
                            <li className="nav-item px-3 px-xl-4"><Link className="nav-link fw-medium" aria-current="page" href="#service">Service</Link></li>
                            <li className="nav-item px-3 px-xl-4"><Link className="nav-link fw-medium" aria-current="page" href="#destination">Courses</Link></li>
                            <li className="nav-item px-3 px-xl-4"><Link className="nav-link fw-medium" aria-current="page" href="#booking">Experince</Link></li>
                            <li className="nav-item px-3 px-xl-4"><Link className="nav-link fw-medium" aria-current="page" href="#testimonial">Testimonial</Link></li>
                            <li className="nav-item px-3 px-xl-4"><Link className="btn btn-outline-dark order-1 order-lg-0 fw-medium" href="#">Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar