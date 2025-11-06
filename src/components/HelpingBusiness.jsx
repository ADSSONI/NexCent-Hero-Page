import React from "react";
import "../styles/HelpingBusiness.css";
import localimg1 from '../images/local_Icon_1.svg';
import localimg2 from '../images/local_Icon_2.svg';
import localimg3 from '../images/local_Icon_3.svg';
import localimg4 from '../images/local_Icon_4.svg';

function HelpingBusiness() {
    return (
        <div class="helping-section">
            <div class="helping-container">



                {/* top side text and stats */}
                <div class="helping-text">
                    <div class="helping-left">
                        <h2>Helping a local <br /><span>business reinvent itself </span></h2>
                        <p>We reached here with our hard work and dedication</p>
                    </div>
                    {/* helping right section  */}
                    <div class="helping-stats">
                        <div class="stat-item">
                            <div class="stat-icon"><img src={localimg1} alt="" /></div>
                            <div>
                                <h3>2,245,341</h3>
                                <p>Members</p>
                            </div>
                        </div>

                        <div class="stat-item">
                            <div class="stat-icon"><img src={localimg2} alt="" /></div>
                            <div>
                                <h3>46,328</h3>
                                <p>Clubs</p>
                            </div>
                        </div>

                        <div class="stat-item">
                            <div class="stat-icon"><img src={localimg3} alt="" /></div>
                            <div>
                                <h3>828,867</h3>
                                <p>Event Bookings</p>
                            </div>
                        </div>

                        <div class="stat-item">
                            <div class="stat-icon"><img src={localimg4} alt="" /></div>
                            <div>
                                <h3>1,926,436</h3>
                                <p>Payments</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default HelpingBusiness;
