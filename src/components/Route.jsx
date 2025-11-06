import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../components/HeroPage';
import About from '../components/MarketingSection';
import Contact from '../components/Footer'
import Commnity from "../components/Community";
import UnseenSection from '../components/UnseenSection';

function Route() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/community" element={<Commnity />} />
                    <Route path="/unseen-section" element={<UnseenSection />} />
                </Routes>
            </BrowserRouter>


        </div>
    )
}

export default Route
