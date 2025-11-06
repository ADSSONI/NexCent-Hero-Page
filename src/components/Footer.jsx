import React from "react";
import "../styles/Footer.css";
import brandicon from '../images/brand_Icon.svg';

function Footer() {
    return (
        <footer class="footer">
            <div class="footer-container">

                {/* ---------- Left Section ---------- */}
                <div class="footer-left">
                    <div class="footer-logo">
                        <img src={brandicon} alt="logo" />
                        <h2>Nexcent</h2>
                    </div>
                    <p>
                        Copyright © 2025 Nexcent. All rights reserved.
                    </p>

                    <div class="footer-social">
                        <div class="social-icon"></div>
                        <div class="social-icon"></div>
                        <div class="social-icon"></div>
                        <div class="social-icon"></div>
                    </div>
                </div>

                {/* ---------- Center Links ---------- */}
                <div class="footer-links">
                    <div>
                        <h3>Company</h3>
                        <ul>
                            <li>About us</li>
                            <li>Blog</li>
                            <li>Contact us</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Support</h3>
                        <ul>
                            <li>Help center</li>
                            <li>Terms of service</li>
                            <li>Legal</li>
                            <li>Privacy policy</li>
                            <li>Status</li>
                        </ul>
                    </div>
                </div>

                {/* ---------- Right Section (Subscribe) ---------- */}
                <div class="footer-right">
                    <h3>Stay up to date</h3>
                    <div class="subscribe">
                        <input type="email" placeholder="Your email address" />
                        <button>→</button>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
