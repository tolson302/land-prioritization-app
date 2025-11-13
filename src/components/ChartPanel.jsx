/* ChartPanel.jsx */

// Imports
import { useState, useEffect } from 'react';
import BarChart from "./BarChart";
import "./ChartPanel.css";

// Define consts
const ChartPanel = ({ parcel }) => {

  const [showPanel, setShowPanel] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (parcel) setShowPanel(true);
  }, [parcel]);

  const props = parcel?.properties || {};

  const labels = ['Grocery', 'School', 'Library', 'Healthcare', 'Culture', 
    'Recreation', 'Bus Stop', 'Gas Station', 'Employment Hub', 'Park'];

  const values = [
    props.GROCERY_SCORE,
    props.SCHOOL_SCORE,
    props.LIBRARY_SCORE,
    props.HEALTH_SCORE,
    props.CULTURE_SCORE,
    props.REC_SCORE,
    props.BUS_SCORE,
    props.GAS_SCORE,
    props.EHUB_SCORE,
    props.PARK_SCORE,
  ];

  // Return and export
  return (
    <div className="chart-container">
      {/* Minimized Chart View */}
      {showPanel && (
        <div className="chart-mini">
          <button onClick={() => setShowModal(true)} className="view-modal-btn">
            View Full Chart
          </button>
          <button onClick={() => setShowPanel(false)} className="close-btn">
            Close ✖
          </button>

          <h4>Accessibility Score Chart</h4>
          <p><strong>Parcel ID: </strong>{props.Serial}</p>
          <BarChart labels={labels} values={values}/>
        </div>
      )}

      {/* Modal Chart View */}
      {showModal && (
        <div className="chart-modal">
          <div className="chart-modal-content">
            <button className="close-modal-btn" onClick={() => setShowModal(false)}>Close ✖</button>
            <h2>Accessibility Score Chart</h2>
            <p><strong>Parcel ID: </strong>{props.Serial}</p>
            <BarChart labels={labels} values={values}/>
          </div>
        </div>  
      )}
    </div>
  );
};

export default ChartPanel
