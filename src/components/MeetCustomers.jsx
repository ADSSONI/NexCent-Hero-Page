import React from "react";
import "../styles/MeetCustomers.css";
import cosimg1 from '../images/costumerLogo1.svg';
import cosimg2 from '../images/costumerLogo2.svg';
import cosimg3 from '../images/costumerLogo3.svg';
import cosimg4 from '../images/costumerLogo4.svg';
import cosimg5 from '../images/costumerLogo5.svg';
import cosimg6 from '../images/costumerLogo6.svg';
import teslaimg from '../images/tesla_image.svg';



function MeetCustomers() {
  return (
    <div class="meet-section">
      <div class="meet-container">

        <div class="meet-image"><img src={teslaimg} alt="" /></div>

        <div class="meet-content">
          <p class="meet-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. 
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis."
          </p>

          <h3>Tim Smith</h3>
          <p class="company-name">British Dragon Boat Racing Association</p>

          <div class="meet-logos">
            <div class="logo"><img src={cosimg1} alt="" /></div>
            <div class="logo"><img src={cosimg2} alt="" /></div>
            <div class="logo"><img src={cosimg3} alt="" /></div>
            <div class="logo"><img src={cosimg4} alt="" /></div>
            <div class="logo"><img src={cosimg5} alt="" /></div>
            <div class="logo"><img src={cosimg6} alt="" /></div>
          </div>

          <a href="#" class="link">
            Meet all customers &rarr;
          </a>
        </div>

      </div>
    </div>
  );
}

export default MeetCustomers;
