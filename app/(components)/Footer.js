import React from 'react'
import { Facebook, Twitter, Instagram } from "lucide-react";
const Footer = () => {
    return (
        <>
            <section className="pb-0 pb-lg-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-7 col-12 mb-4 mb-md-6 mb-lg-0 order-0"> <img className="mb-4 footer-logo" src="https://ik.imagekit.io/aatmicfit/Website/Custom/png.jpeg" alt="Aatmic Fit" />
                            <p className="fs--1 text-secondary mb-0 fw-medium">Book your trip in minute, get full Control for much longer.</p>
                        </div>
                        <div className="col-lg-2 col-md-4 mb-4 mb-lg-0 order-lg-1 order-md-2">
                            <h4 className="footer-heading-color fw-bold font-sans-serif mb-3 mb-lg-4">Company</h4>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a className="link-900 fs-1 fw-medium text-decoration-none" href="#!">About</a></li>
                                <li className="mb-2"><a className="link-900 fs-1 fw-medium text-decoration-none" href="#!">Careers</a></li>
                                <li className="mb-2"><a className="link-900 fs-1 fw-medium text-decoration-none" href="#!">Mobile</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 mb-4 mb-lg-0 order-lg-2 order-md-3">
                            <h4 className="footer-heading-color fw-bold font-sans-serif mb-3 mb-lg-4">Contact</h4>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a className="link-900 fs-1 fw-medium text-decoration-none" href="#!">Help/FAQ</a></li>
                                <li className="mb-2"><a className="link-900 fs-1 fw-medium text-decoration-none" href="#!">Press</a></li>
                                <li className="mb-2"><a className="link-900 fs-1 fw-medium text-decoration-none" href="#!">Affiliate</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 mb-4 mb-lg-0 order-lg-3 order-md-4">
                            <h4 className="footer-heading-color fw-bold font-sans-serif mb-3 mb-lg-4">More</h4>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2"><a className="link-900 fs-1 fw-medium text-decoration-none" href="#!">Airlinefees</a></li>
                                <li className="mb-2"><a className="link-900 fs-1 fw-medium text-decoration-none" href="#!">Airline</a></li>
                                <li className="mb-2"><a className="link-900 fs-1 fw-medium text-decoration-none" href="#!">Low fare tips</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-5 col-12 mb-4 mb-md-6 mb-lg-0 order-lg-4 order-md-1">
                            <h4 className="footer-heading-color fw-bold font-sans-serif mb-3 mb-lg-4">Social Links</h4>
                            <div className="icon-group mb-4"> <a className="text-decoration-none icon-item shadow-social" id="facebook" href="#!"><Facebook /></a><a className="text-decoration-none icon-item shadow-social" id="instagram" href="#!"> <Instagram /> </a><a className="text-decoration-none icon-item shadow-social" id="twitter" href="#!"> <Twitter /> </a></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-5 text-center">
                <p className="mb-0 text-secondary fs--1 fw-medium">All rights reserved @ Aatmic Fit </p>
            </div>
        </>
    )
}

export default Footer