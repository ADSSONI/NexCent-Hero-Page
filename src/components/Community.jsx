import React from "react";
import "../styles/community.css";
import CommunityImg1 from "../images/community_img_1.svg";
import CommunityImg2 from "../images/community_img_2.svg";
import CommunityImg3 from "../images/community_img_3.svg";

function Community() {
    return (
        <div class="community-section">
            <div class="community-header">
                <h2>Manage your entire community</h2>
                <h3>In a single system</h3>
                <p>Who is Nexcent suitable for?</p>
            </div>

            <div class="community-cards">
                <div class="card">
                    <div class="card-img"><img src={CommunityImg1} alt="" /></div>
                    <h3>Membership Organisations</h3>
                    <p>
                        Our membership management software provides full automation of
                        membership renewals and payments.
                    </p>
                </div>

                <div class="card">
                    <div class="card-img"><img src={CommunityImg2} alt="" /></div>
                    <h3>National Associations</h3>
                    <p>
                        Our membership management software provides full automation of
                        membership renewals and payments.
                    </p>
                </div>

                <div class="card">
                    <div class="card-img"><img src={CommunityImg3} alt="" /></div>
                    <h3>Clubs And Groups</h3>
                    <p>
                        Our membership management software provides full automation of
                        membership renewals and payments.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Community;
