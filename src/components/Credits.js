import React from "react";
import "../styles/Credits.css";
import FadeInSection from "./FadeInSection";

function Credits() {
    return (
      <FadeInSection>
        <div id="credits">
          <div className="ending-credits">
            <div>Built and designed by Nithin Xavier. </div>
            <div>All rights reserved. ©</div>
          </div>
        </div>
      </FadeInSection>
    );
  }

export default Credits;
