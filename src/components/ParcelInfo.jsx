/* ParcelInfo.jsx */

import React, { useState } from 'react';
import './ParcelInfo.css';

const ParcelInfo = ({ parcel }) => {
  const [showModal, setShowModal] = useState(false);
  const props = parcel?.properties || {};

  return (
    <div className="parcel-info">
      {/* Summary View */}
      <p><strong>Parcel ID:</strong> {props.Serial || 'N/A'}</p>
      <p><strong>Site Address:</strong> {props.SITUS || 'N/A'}</p>
      <p><strong>Owner:</strong> {props.OwnerType || 'N/A'}</p>
      <p><strong>Acres:</strong> {props.Acres || 'N/A'}</p>

      <button onClick={() => setShowModal(true)} className="view-more-btn">
        View Full Info
      </button>
    
      {/* Modal */}
      {showModal && (
        <div className="parcel-modal">
          <div className="modal-content">

            {/* Modal header */}
            <div className="modal-header">
              <button className="close-btn" onClick={() => setShowModal(false)}>Close ✖</button>
              <h2>Parcel Details</h2>
            </div>

            {/* Modal content (scrolls) */}
            <div className="modal-contentt">
              <table className="parcel-table">
                <tbody>
                  {/* Summary Info */}
                  <tr><td>Parcel ID:</td><td>{props.Serial || 'N/A'}</td></tr>
                  <tr><td>Site Address:</td><td>{props.SITUS || 'N/A'}</td></tr>
                  <tr><td>Owner:</td><td>{props.OwnerType || 'N/A'}</td></tr>
                  <tr><td>Acres:</td><td>{props.Acres || 'N/A'}</td></tr>

                  {/* Special Restrictions */}
                  <tr><th colSpan="2">Special Restrictions</th></tr>
                  <tr><td>Service Area:</td><td>{props.SERVICEAREA || 'N/A'}</td></tr>
                  <tr><td>Fire District:</td><td>{props.FIRE_DIST || 'N/A'}</td></tr>
                  <tr><td>Conservation Easement:</td><td>{props.CSVN_LAND || 'N/A'}</td></tr>
                  <tr><td>WUI:</td><td>{props.WUI || 'N/A'}</td></tr>

                  {/* Zoning Info */}
                  <tr><th colSpan="2">Zoning Info</th></tr>
                  <tr><td>Zoning Type:</td><td>{props.ZONING || 'N/A'}</td></tr>
                  <tr><td>UT Senate Dist.:</td><td>{props.SENATEDIST2022 || 'N/A'}</td></tr>
                  <tr><td>UT House Dist.:</td><td>{props.HOUSEDIST2022 || 'N/A'}</td></tr>
                  <tr><td>Voter Precinct:</td><td>{props.VOTERPRECINCT2022 || 'N/A'}</td></tr>

                  {/* Utilities */}
                  <tr><th colSpan="2">Utilities</th></tr>
                  <tr><td>Water:</td><td>{props.WATER || 'N/A'}</td></tr>
                  <tr><td>Sewer:</td><td>{props.SEWER || 'N/A'}</td></tr>

                  {/* Distance Sections */}
                  {renderDistanceSection("Grocery Store", props.GROCERY_WALK, props.GROCERY_BIKE, props.GROCERY_DRIVE)}
                  {renderDistanceSection("School", props.SCHOOL_WALK, props.SCHOOL_BIKE, props.SCHOOL_DRIVE)}
                  {renderDistanceSection("Library", props.LIBRARY_WALK, props.LIBRARY_BIKE, props.LIBRARY_DRIVE)}
                  {renderDistanceSection("Healthcare", props.HEALTH_WALK, props.HEALTH_BIKE, props.HEALTH_DRIVE)}
                  {renderDistanceSection("Cultural Amenity", props.CULTURE_WALK, props.CULTURE_BIKE, props.CULTURE_DRIVE)}
                  {renderDistanceSection("Recreation", props.REC_WALK, props.REC_BIKE, props.REC_DRIVE)}
                  {renderDistanceSection("Gas Station", props.GAS_WALK, props.GAS_BIKE, props.GAS_DRIVE)}
                  {renderDistanceSection("Employment Hub", props.EHUB_WALK, props.EHUB_BIKE, props.EHUB_DRIVE)}
                  {renderDistanceSection("Park", props.PARK_WALK, props.PARK_BIKE, props.PARK_DRIVE)}

                  {/* Bus Stop */}
                  <tr><th colSpan="2">Distance to Bus Stop</th></tr>
                  <tr><td>Bus Stop:</td><td>{props.BUS_STOP || 'N/A'}</td></tr>
                  <tr><td>Routes Serviced:</td><td>{props.BUS_ROUTES || 'N/A'}</td></tr>
                  <tr><td>Walk Time:</td><td>{props.REC_WALK || 'N/A'}</td></tr>
                  <tr><td>Bike Time:</td><td>{props.REC_BIKE || 'N/A'}</td></tr>

                  {/* Score */}
                  <tr><th colSpan="2">Parcel Score</th></tr>
                  <tr><td>Developable Score:</td><td>{props.DEVELOP_SCORE || 'N/A'}</td></tr>
                  <tr><td>Overall Score:</td><td>{props.OVERALL_SCORE || 'N/A'} {props.OVERALL_TEXT}</td></tr>
                </tbody>
              </table>
            </div>

            {/* Modal footer and action buttons (fixed) */}
            <div className="modal-footer">
              <div className="modal-footer-buttons">
                <button
                  className="return-top-modal"
                  onClick={() => {
                    const modal = document.querySelector(".modal-content");
                    if (modal) modal.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                    Return to Top ↑
                  </button>

                <button className="footer-close-btn" onClick={() => setShowModal(false)}>
                    Close ✖
                </button>
              </div>
            </div>
          
          </div>
        </div>

      )}
    </div>
  );
};

// Helper to render distance section
const renderDistanceSection = (label, walk, bike, drive) => (
  <>
    <tr><th colSpan="2">Distance to {label}</th></tr>
    <tr><td>Walk Time:</td><td>{walk || 'N/A'}</td></tr>
    <tr><td>Bike Time:</td><td>{bike || 'N/A'}</td></tr>
    <tr><td>Drive Time:</td><td>{drive || 'N/A'}</td></tr>
  </>
);

export default ParcelInfo;
