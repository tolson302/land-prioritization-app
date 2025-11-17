/* HelpMenu.jsx */

// Imports
import React, { useState } from "react";
import "./HelpMenu.css";
// Import images
import toolbarbtns from "../assets/help-menu-img/toolbar_buttons.png";
import searchtool from "../assets/help-menu-img/search_tool.png";
import parcelsearch from "../assets/help-menu-img/parcel_search.png";
import layersbutton from "../assets/help-menu-img/layers_pane.png";
import weightswidget from "../assets/help-menu-img/weights_widget.png";
import resetbutton from "../assets/help-menu-img/weights-reset.png";
import hidebutton from "../assets/help-menu-img/hide_button.png";
import mapfilters from "../assets/help-menu-img/map_filters.png";
import clearfilters from "../assets/help-menu-img/clear_filters.png";

// Define consts
const HelpMenu = ({ isOpen, onClose }) => {
    const slides = [
        // Page 1
        {
            title: <div className="help-header">Help Guide</div>,
            text: <div className="eee">
                    <p><strong>Map Basics: </strong>Click and drag with your mouse to pan around the Map. Use the zoom tool, located in the upper-left part of the map,
                        to zoom in and out.
                    </p>
                    <p><strong>Legend & Layers: </strong>
                        The Legend button, located in the upper-right of the map toolbar, reveals on the legend pane, which shows what
                        different map symbols mean. To close the legend pane, click the Legend button once again.
                    </p>
                        {/* Toolbar buttons image */}
                        <img src={toolbarbtns} className="help-img" alt="Toolbar buttons"/>
                    <p>
                        <strong>The layers button,</strong> located right next to the Legend button in the map toolbar, allows you to turn on/off different basemaps and map layers. To
                        access the map layers, click on the Layers button, and select the buttons beside each layer to turn them on. To close the layers pane, click
                        the Layers button once again.
                    </p>
                        {/* Layers pane image */}
                        <img src={layersbutton} className="help-img-mini" alt="Layers pane"/>
                    <p><strong>Search Tools: </strong>
                        The search tool in the upper-left part of the map allows you to search for a street address. Simply type in
                        the desired street address, click Search, and the map will zoom to that address.
                    </p>
                        {/* Address search tool image */}
                        <img src={searchtool} className="help-img" alt="Address search tool"/>
                    <p> 
                        <strong>The parcel search tool,</strong> located next to the Legend and Layers buttons in the toolbar, allows you to search
                        by parcel number. Click the Parcel Search button, type in a parcel number, click Search, and the map will
                        zoom to that parcel.
                    </p>
                        {/* Parcel search tool image */}
                        <img src={parcelsearch} className="help-img" alt="Parcel search tool"/>
                    <div className="pg-numbers">
                        Page 1 of 4
                    </div>
                </div>
        },
        // Page 2
        {
            title: <div className="help-header">Weights Widget</div>,
            text: <div className="eee">
                        <p>
                            Located in the lower-right part of the map, the Weights Widget is a tool that allows you to adjust how much different 
                            factors impact the overall parcel score. Each parcel is given a score of 1-10 based on the distance to various daily
                            necessities and amenities, including:</p>
                            <ul>
                                <li>Grocery stores</li>
                                <li>Schools</li>
                                <li>Libraries/community centers</li>
                                <li>Healthcare facilities</li>
                                <li>Cultural amenities (e.g., art galleries, bookstores, historical sites)</li>
                                <li>Recreational sites</li>
                                <li>Bus stops</li>
                                <li>Gas stations</li>
                                <li>Employment hubs</li>
                                <li>Parks</li>
                            </ul>
                        <p>
                            Parcel scores are also based on whether or not the parcel is developable. For example, parcels that are privately owned
                            or parcels that have building restrictions have low development scores.
                        </p>
                        <div className="pg-numbers">
                            Page 2 of 4
                        </div>
                    </div> 
        },
        // Page 3
        {
            title: <div className="help-header">Weights Widget Cont'd</div>,
            text: <div className="eee">
                        <p>
                            You can adjust how much or how little different categories influence the overall parcel score by changing the values
                            in the Weights Widget. For example, if you'd like the distance to libraries to be more important, you can click and 
                            drag the slider to a value of 10. Then, the map will update so that parcels closest to libraries will have slightly
                            higher overall scores.
                        </p>
                            {/* Weights widget image */}
                            <img src={weightswidget} className="help-img-mini" alt="Weights widget"/>
                        <p>
                            To hide the Weights Widget, click the Hide button at the top of the widget. Once it's collapsed, you can click Show
                            to reopen the Weights Widget.
                        </p>
                            {/* Hide button image */}
                            <img src={hidebutton} className="help-img-mini" alt="Weights widget"/>
                        <p>
                            If you changed the weight values and would like to reset them, click the Reset to Default button at the bottom of
                            the Weights Widget.
                        </p>
                            {/* Reset button image */}
                            <img src={resetbutton} className="help-img-mini" alt="Reset weights widget"/>
                        <div className="pg-numbers">
                            Page 3 of 4
                        </div>
                    </div>
        },
        // Page 4
        {
            title: <div className="help-header">Map Filters</div>,
            text: <div className="eee">
                    <p>
                        Located in the left sidebar menu, map filters allow you to narrow down parcels on the map based on different characteristics.
                        For example, if you'd like to only see county-owned parcels that are within a 0-5 walk of a grocery store, click on 'Filter
                        by Owner Type' and select 'Summit County', and then click on 'Filter by Grocery Distance', click on 'Filter by Grocery Walk 
                        Time', and select '0-5 min' from the options.
                    </p>
                        {/* Map filters image */}
                        <img src={mapfilters} className="help-img-mini" alt="Map filters"/>
                    <p>
                        To reset the filters, scroll or navigate to the bottom of the left sidebar menu, and select the blue 'Clear All Filters' button.
                    </p>
                        {/* Clear filters image */}
                        <img src={clearfilters} className="help-img-mini" alt="Clear all filters"/>
                    <div className="pg-numbers">
                        Page 4 of 4
                    </div>
                </div>
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    };

    if (!isOpen) return null;

    // Return and export
    return (
        <div className="help-menu-container">
            <div className="help-menu">

                <button onClick={onClose} className="help-close-btn">Close X</button>

                {/* Slide content (scrolls) */}
                <div className="help-content">
                    <h2 className="slide-title">
                        {slides[currentSlide].title}
                    </h2>
                    <div className="help-text">
                        {slides[currentSlide].text}
                    </div>
                </div>

                {/* Navigation buttons (fixed) */}
                <div className="help-footer">
                    <button onClick={handlePrev} className="nav-btn prev">
                        ← Previous
                    </button>
                    <button onClick={handleNext} className="nav-btn next">
                        Next →
                    </button>
                </div>
                
            </div>
        </div> 
    );
};

export default HelpMenu;
