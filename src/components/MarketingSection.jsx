import React from "react";
import "../styles/MarketingSection.css";
import marketingimg1 from '../images/marketing_img1.svg';
import marketingimg2 from '../images/marketing_img2.svg';
import marketingimg3 from '../images/marketing_img3.svg';

function MarketingSection() {
    return (
        <>
            <section class="marketing-section">
                <div class="marketing-header">
                    <h1>Caring is the new marketing</h1>
                    <p>
                        The Nexcent blog is the best place to read about the latest membership
                        insights, trends and more. See who’s joining the community, read about
                        how our members are increasing their membership income, and lots more.
                    </p>
                </div>

                <div class="marketing-cards">
                    <div class="marketing-card">
                        <img src={marketingimg1} alt="Card 1" />
                        <div className="innetText">

                            <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
                            <button class="read-btn">Readmore →</button>
                        </div>
                    </div>
                    <div class="marketing-card">
                        <img src={marketingimg2} alt="Card 1" />
                        <div className="innetText">

                            <h3> What are your safeguarding responsibilities and how can you manage
                                them?</h3>
                            <button class="read-btn">Readmore →</button>
                        </div>
                    </div>
                    <div class="marketing-card">
                        <img src={marketingimg3} alt="Card 1" />
                        <div className="innetText">

                            <h3>  Revamping the Membership Model with Triathlon Australia
                                them?</h3>
                            <button class="read-btn">Readmore →</button>
                        </div>
                    </div>


                </div>


            </section>
                <div class="explore-more">
                    <h1>Pellentesque suscipit <br /> fringilla libero eu.</h1>

                    <button className="getDemo">Get a Demo →</button>


                </div>
        </>
    );
}

export default MarketingSection;
