import React from "react";
import "../styles/DesignFooterSection.css";
import pana from "../images/panaimg.svg";

function DesignFooterSection() {
  return (
    <div class="design-footer-section">
      <div class="design-footer-container">

        <div class="design-footer-image">
          <img src={pana} alt="Pana" />
        </div>

        <div class="design-footer-content">
          <h2>How to design your site footer like we did</h2>
          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt.
          </p>
          <button class="learn-more-btn">Learn More</button>
        </div>

      </div>
    </div>
  );
}

export default DesignFooterSection;
