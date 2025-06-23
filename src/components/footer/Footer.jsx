import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Rohan</h1>

                <ul className="footer_list">

                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Projects</a>
                    </li>

                    <li>
                        <a href="#services" className="footer_link">Services</a>
                    </li>

                </ul>

                <div className="footer_social">
                    <a href="https://x.com/" className="footer_social-link" target="_blank" rel="noopener noreferrer">
                        <i className="uil uil-twitter-alt"></i>
                    </a>

                    <a href="https://www.facebook.com/" className="footer_social-link" target="_blank" rel="noopener noreferrer" >
                        <i class="uil uil-facebook-f"></i>
                    </a>

                    <a href="https://www.instagram.com/" className="footer_social-link" target="_blank" rel="noopener noreferrer">
                        <i className="uil uil-instagram"></i>
                    </a>

                </div>
                <span className="footer_copy">&#169; Rohan K Shine. All rights reserved</span>

            </div>
        </footer>
    )
}

export default Footer