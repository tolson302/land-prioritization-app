// SplashScreen.jsx

// Imports
import React, { useState } from "react";
import "./SplashScreen.css";
import header from "../assets/splash-image.jpg";

// Define consts
const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  if (!showSplash) return null;

  // Return and export
  return (
    <div className="splash-container">
      <div className="splash-content">
        <div className="splash-header">
          <img src={header} className="header-image" alt="Splash header" />
        </div>
        <div className="splash-body">
          <p className="splash-title">Welcome to the Summit County Land Prioritization App</p>
             <p>This interactive map serves as a tool for highlighting potential areas for building 
                affordable housing units in Summit County. This map is neither a legally recorded 
                map nor a survey, and it is not intended to be used as such. Neither is it the 
                official tax parcel map. The information displayed is a collection of records,
                information, and data obtained from various sources, including Summit County which
                is not responsible for its accuracy or timeliness.
                
                By selecting "OK" you agree to these terms.
             </p>
          <button
            className="splash-close-btn"
            onClick={() => setShowSplash(false)}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
