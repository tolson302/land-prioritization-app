/* Legend.jsx */

// Imports
import './Header.css';

// Define consts
const Legend = () => {
  const grades = ['Excellent', 'Great', 'Average', 'Poor', 'Very Poor'];
  const colors = ['#22A12F', '#9AD17E', '#FAFDCB', '#ED9C6E', '#C9261B'];

  const cigrades = ['Cities'];
  const cicolors = ['#CCCCCC'];

  const cdpgrades = ['CDPs'];
  const cdpcolors = ['pink'];

  const negrades = ['Neighborhoods']
  const necolors = ['#7852A9']
  
  const scdgrades = ['North Summit', 'Park City', 'South Summit'];
  const scdcolors = ['#6c07b0', '#ed5151', '#0aa354'];

  const bagrades = ['Basin Recreation Dist.'];
  const bacolors = ['#ff9100'];

  const swgrades = ['Sewersheds'];
  const swcolors = ['#04ff00'];

  const segrades = ['UT Senate Districts'];
  const secolors = ['#ffff00'];

  const hogrades = ['UT House Districts'];
  const hocolors = ['#38a800'];

  const vogrades = ['Voter Precincts'];
  const vocolors = ['#E8BEFF'];

  const pdgrades = ['Eastern Summit', 'Snyderville Basin'];
  const pdcolors = ['#008ECC','#EF820D']

  // Return and export 
  return (
    <div className="legend-dropdown">
      <h4 className="legend-title">Legend</h4>
      {/* Cities */}
      {cigrades.map((grade, i) => (
        <div key={i} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: cicolors[i] }}
          ></span>
          <span className="legend-label">{grade}</span>
        </div>
      ))}
      
      {/* CDPs */}
      {cdpgrades.map((grade, i) => (
        <div key={i} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: cdpcolors[i] }}
            ></span>
            <span className="legend-label">{grade}</span>
          </div>
      ))}

      {/* Neighborhoods */}
      {negrades.map((grade, i) => (
        <div key={i} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: necolors[i] }}
            ></span>
            <span className="legend-label">{grade}</span>
          </div>
      ))}

      {/* Basin Rec. District */}
      {bagrades.map((grade, i) => (
        <div key={i} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: bacolors[i] }}
            ></span>
            <span className="legend-label">{grade}</span>
          </div>
      ))}

      {/* Sewersheds */}
      {swgrades.map((grade, i) => (
        <div key={i} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: swcolors[i] }}
            ></span>
            <span className="legend-label">{grade}</span>
          </div>
      ))}

      {/* UT Senate Districts */}
      {segrades.map((grade, i) => (
        <div key={i} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: secolors[i] }}
            ></span>
            <span className="legend-label">{grade}</span>
          </div>
      ))}

      {/* UT House Districts */}
      {hogrades.map((grade, i) => (
        <div key={i} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: hocolors[i] }}
            ></span>
            <span className="legend-label">{grade}</span>
          </div>
      ))}

      {/* Voter Precincts */}
      {vogrades.map((grade, i) => (
        <div key={i} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: vocolors[i] }}
            ></span>
            <span className="legend-label">{grade}</span>
          </div>
      ))}

      <h4 className="legend-title">Overall Score</h4>
      {/* Parcel scores */}
      {grades.map((grade, i) => (
        <div key={i} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: colors[i] }}
          ></span>
          <span className="legend-label">{grade}</span>
        </div>
      ))}
      
      <h4 className="legend-title">School Districts</h4>
      {/* School Districts */}
      {scdgrades.map((grade, i) => (
        <div key={i} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: scdcolors[i] }}
            ></span>
            <span className="legend-label">{grade}</span>
          </div>
      ))}

      <h4 className="legend-title">Planning Districts</h4>
      {/* Planning Districts */}
      {pdgrades.map((grade, i) => (
        <div key={i} className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: pdcolors[i] }}
            ></span>
            <span className="legend-label">{grade}</span>
          </div>
      ))}

    </div>
  );
};

export default Legend;

