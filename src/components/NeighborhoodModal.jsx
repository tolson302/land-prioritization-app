/* NeighborhoodModal.jsx */

// Imports
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./NeighborhoodModal.css";
// Import icons in modal
import age from "../assets/median-age.png";
import income from "../assets/median-income.png";
import edu from "../assets/education.png";
// Add labels to donut chart
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register components needed for donut chart
ChartJS.register(ArcElement, Title, Tooltip, Legend, ChartDataLabels);

// Define consts
const NeighborhoodModal = ({ data, onClose }) => {
  const chartData = {
    labels: ["Owner Occupied","Renter Occupied"],
    datasets: [
      {
        data: [data.OWN_OCC, data.RENT_OCC],
        backgroundColor: ["#4e79a7", "#f28e2b"],
        borderWidth: 1,
      },
    ],
  };


 const chartOptions = {
    cutout: "60%",
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Neighborhood Overview",
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 14,
        },
        formatter: (value, context) => {
          const dataArr = context.chart.data.datasets[0].data;
          const total = dataArr.reduce((a, b) => a + b, 0);
          const percentage = ((value / total) * 100).toFixed(1);
          return percentage + "%";
        },
      },
    },
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">

        {/* Modal header and close button */}
        <div className="modal-header">
            <h2>{data.NAME}</h2>
            <p><i>Neighborhood Overview</i></p>
            <button className="close-btn" onClick={onClose}>Close ✖</button>
        </div>

        {/* Info table */}
        <table className="info-table">
          <tbody>
            <tr><td><strong>Area</strong></td><td>{data.AREA} mi²</td></tr>
            <tr><td><strong>Dominant Tapestry</strong></td><td>{data.DOM_TAPESTRY}</td></tr>
            <tr><td><strong>Household Type</strong></td><td>{data.HH_TYPE}</td></tr>
            <tr><td><strong>Employment</strong></td><td>{data.EMPLOYMENT}</td></tr>
          </tbody>
        </table>

        {/* Quick stats layout */}
        <div className="stats-container">
            <div className="stat-item">
                <img src={age} alt="Median Age" className="stat-icon" />
                <div className="stat-value">{data.MED_AGE}</div>
                <div className="stat-label">Median Age</div>
            </div>

            <div className="stat-item">
                <img src={income} alt="Median Household Income" className="stat-icon" />
                <div className="stat-value">{data.MED_HH_INCOME.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                })}</div>
                <div className="stat-label">Median Household Income</div>
            </div>

            <div className="stat-item">
                <img src={edu} alt="College Degree" className="stat-icon" />
                <div className="stat-value">{(data.EDUCATION * 100).toFixed(1)}%</div>
                <div className="stat-label">College Degree (2+ years)</div>
            </div>
        </div>

        {/* Housing and wealth table */}
        <table className="info-table">
          <tbody>
            <tr><th colSpan="2">Housing & Wealth</th></tr>
            <tr><td><strong>Wealth Index</strong></td><td>{data.WLTH_INDEX}</td></tr>
            <tr><td><strong>Housing Affordability Index</strong></td><td>{data.HOU_AFFORD_INDEX}</td></tr>
            <tr><td><strong>Median Net Worth</strong></td><td>{data.MED_NET_WORTH.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
            })}</td></tr>
            <tr><td><strong>Median Home Value</strong></td><td>{data.MED_HOME_VAL.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
            })}</td></tr>
          </tbody>
        </table>

        {/* Population table */}
        <table className="info-table">
          <tbody>
            <tr><th colSpan="2">Population Data</th></tr>
            <tr><td><strong>Total Population</strong></td><td>{data.POP_TOTAL}</td></tr>
            <tr><td><strong>Pop. Growth Rate</strong></td><td>{(data.POP_GROWTH * 100).toFixed(1)}%</td></tr>
            <tr><td><strong>Pop. Density</strong> pp/sq mi</td><td>{data.POP_DENSITY}</td></tr>
            <tr><td><strong>Total Households</strong></td><td>{data.HH_TOTAL}</td></tr>
            <tr><td><strong>Avg. Household Size</strong></td><td>{data.AVG_HH_SIZE}</td></tr>
          </tbody>
        </table>

        {/* Indices table */}
        <table className="info-table">
          <tbody>
            <tr><th colSpan="2">Indices</th></tr>
            <tr><td><strong>Diversity Index</strong></td><td>{data.DIV_INDEX}</td></tr>
            <tr><td><strong>Pensions/Social Security Index</strong></td><td>{data.SS_INDEX}</td></tr>
            <tr><td><strong>Education Index</strong></td><td>{data.EDU_INDEX}</td></tr>
            <tr><td><strong>Entertainment/Rec. Index</strong></td><td>{data.REC_INDEX}</td></tr>
            <tr><td><strong>Health Care Index</strong></td><td>{data.HC_INDEX}</td></tr>
            <tr><td><strong>Transportation Index</strong></td><td>{data.TRANS_INDEX}</td></tr>
            <tr><td><strong>Apparel/Services Index</strong></td><td>{data.SERVICES_INDEX}</td></tr>
            <tr><td><strong>Food Index</strong></td><td>{data.FOOD_INDEX}</td></tr>
            <tr><td><strong>Housing Index</strong></td><td>{data.HOU_INDEX}</td></tr>
          </tbody>
        </table>

        {/* Cost of living table */}
        <table className="info-table">
          <tbody>
            <tr><th colSpan="2">Cost of Living</th></tr>
            <tr><td><strong>Avg. Monthly Mortgage</strong></td><td>{data.AVG_MRTGGE.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
            })}</td></tr>
            <tr><td><strong>Avg. Monthly Rent</strong></td><td>{data.AVG_RENT.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
            })}</td></tr>
          </tbody>
        </table>

        {/* Own vs rent chart */}
        <div style={{ height: "300px", width: "60%" }}>
          <Doughnut 
            data={chartData} 
            options={chartOptions}
          />
        </div>

        {/* Language table */}
        <table className="info-table">
          <tbody>
            <tr><th colSpan="2">Population by Language</th></tr>
            <tr><td><strong>English Only</strong></td><td>{data.ENG_ONLY}</td></tr>
            <tr><td><strong>Spanish</strong></td><td>{data.SPANISH}</td></tr>
            <tr><td><strong>Indo-European</strong></td><td>{data.INDO_EURO}</td></tr>
            <tr><td><strong>Asian-Pacific Island</strong></td><td>{data.ASIAN_PAC}</td></tr>
            <tr><td><strong>Other Language</strong></td><td>{data.OTHER_LANG}</td></tr>
          </tbody>
        </table>

        {/* Bottom action buttons (above footer) */}
        <div className="modal-bottom-buttons">
            <button 
                className="return-top-btn" 
                onClick={() => {
                const modal = document.querySelector(".modal-content");
                if (modal) modal.scrollTo({ top: 0, behavior: "smooth" });
                }}
            >
                Return to Top ↑
            </button>

            <button className="close-btn-bottom" onClick={onClose}>
                Close X
            </button>
        </div>

        {/* Footer */}
        <div className="modal-footer">
            <p>Data for neighborhoods provided by Dominant Tapestry Profile from ArcGIS Business Analyst, 2025</p>
        </div>

      </div>
    </div>
  );
};

export default NeighborhoodModal;
