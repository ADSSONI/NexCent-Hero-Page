import React from "react";
import "../styles/UnseenSection.css";
import fame35 from "../images/Frame35.svg";

function UnseenSection() {
  return (
    <div class="unseen-section">
      <div class="unseen-container">

        <div class="unseen-image"><img src={fame35} alt="" /></div>

        <div class="unseen-content">
          <h2>The unseen of spending three years at Pixelgrade</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
            Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. 
            Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. 
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button class="learn-more-btn">Learn More</button>
        </div>

      </div>
    </div>
  );
}

export default UnseenSection;
