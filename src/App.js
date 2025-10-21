/* App.js */

import React, { useState, useEffect } from 'react';
import MyMap from './components/MyMap';
import WeightsWidget from './components/WeightsWidget';
import OwnerTypeFilter from './components/OwnerTypeFilter';
// import parcelData from './data/Parcels.json';
import Header from './components/Header';
import GroceryDistanceFilter from './components/GroceryDistanceFilter';
import SchoolDistanceFilter from './components/SchoolDistanceFilter';
import LibraryDistanceFilter from './components/LibraryDistanceFilter';
import HealthDistanceFilter from './components/HealthDistanceFilter';
import CultureDistanceFilter from './components/CultureDistanceFilter';
import RecDistanceFilter from './components/RecDistanceFilter';
import BusDistanceFilter from './components/BusDistanceFilter';
import GasDistanceFilter from './components/GasDistanceFilter';
import EhubDistanceFilter from './components/EhubDistanceFilter';
import ParkDistanceFilter from './components/ParkDistanceFilter';
import ZoningFilter from './components/ZoningFilter';
import SpecialRestrictionsFilter from './components/SpecialRestrictionsFilter';
import Footer from './components/Footer';
import './components/Footer.css';
import './App.css';
import ParcelInfo from './components/ParcelInfo';
import VacantFilter from './components/VacantFilter'; // Remove?

const defaultWeights = {
  GROCERY: 10,
  SCHOOL: 10,
  LIBRARY: 3,
  HEALTH: 10,
  CULTURE: 3,
  REC: 3,
  BUS: 4,
  GAS: 10,
  EHUB: 5,
  PARK: 3,
  DEVELOP: 10
};

function App() {
  /* */
  const [geoData, setGeoData] = useState(null);
  const [selectedParcel, setSelectedParcel] = React.useState(null); // Clear!

  const [isParcelOpen, setIsParcelOpen] = React.useState(false) // Remove??
  useEffect(() => {
    fetch('/data/Parcels.json')
    .then((res) => res.json())
    .then((data) => setGeoData(data))
    .catch((err) => console.error('Error loading GeoJSON:', err));
  }, []);

  
  /* */
  const [weights, setWeights] = useState(defaultWeights);
  const [selectedType, setSelectedType] = useState('All');
  /* */
  const [selectedVType, setSelectedVType] = useState('All');
  /* */
  const [selectedZType, setSelectedZType] = useState('All');
  const [selectedSnyZType, setSelectedSnyZType] = useState('All');

  const resetWeights = () => setWeights(defaultWeights);

  const [selectedGrWalkTime, setSelectedGrWalkTime] = useState([]);
  const [selectedGrBikeTime, setSelectedGrBikeTime] = useState([]);
  const [selectedGrDriveTime, setSelectedGrDriveTime] = useState([]);

  const [selectedSchWalkTime, setSelectedSchWalkTime] = useState([]);
  const [selectedSchBikeTime, setSelectedSchBikeTime] = useState([]);
  const [selectedSchDriveTime, setSelectedSchDriveTime] = useState([]);

  const [selectedLiWalkTime, setSelectedLiWalkTime] = useState([]);
  const [selectedLiBikeTime, setSelectedLiBikeTime] = useState([]);
  const [selectedLiDriveTime, setSelectedLiDriveTime] = useState([]);

  const [selectedHeWalkTime, setSelectedHeWalkTime] = useState([]);
  const [selectedHeBikeTime, setSelectedHeBikeTime] = useState([]);
  const [selectedHeDriveTime, setSelectedHeDriveTime] = useState([]);

  const [selectedCuWalkTime, setSelectedCuWalkTime] = useState([]);
  const [selectedCuBikeTime, setSelectedCuBikeTime] = useState([]);
  const [selectedCuDriveTime, setSelectedCuDriveTime] = useState([]);

  const [selectedReWalkTime, setSelectedReWalkTime] = useState([]);
  const [selectedReBikeTime, setSelectedReBikeTime] = useState([]);
  const [selectedReDriveTime, setSelectedReDriveTime] = useState([]);

  const [selectedBuWalkTime, setSelectedBuWalkTime] = useState([]);
  const [selectedBuBikeTime, setSelectedBuBikeTime] = useState([]);

  const [selectedGaWalkTime, setSelectedGaWalkTime] = useState([]);
  const [selectedGaBikeTime, setSelectedGaBikeTime] = useState([]);
  const [selectedGaDriveTime, setSelectedGaDriveTime] = useState([]);

  const [selectedEhWalkTime, setSelectedEhWalkTime] = useState([]);
  const [selectedEhBikeTime, setSelectedEhBikeTime] = useState([]);
  const [selectedEhDriveTime, setSelectedEhDriveTime] = useState([]);

  const [selectedPaWalkTime, setSelectedPaWalkTime] = useState([]);
  const [selectedPaBikeTime, setSelectedPaBikeTime] = useState([]);
  const [selectedPaDriveTime, setSelectedPaDriveTime] = useState([]);

  const [selectedWaValue, setSelectedWaValue] = useState('All');
  const [selectedSeValue, setSelectedSeValue] = useState('All');
  const [selectedCoValue, setSelectedCoValue] = useState('All')
  const [selectedWuValue, setSelectedWuValue] = useState('All');
  /* */
  const [selectedBasemap, setSelectedBasemap] = useState('osm');
const [selectedOverlays, setSelectedOverlays] = useState([]);
  /* */
  if (!geoData) return <div>Loading map data...</div>;

const ownerTypes = Array.from(
  new Set(
    geoData.features
      .map(f => f.properties?.OwnerType)
      .filter(Boolean)
  )
);
/* */
const vacantTypes = Array.from(
  new Set(
    geoData.features
      .map(f => f.properties?.VACANT)
      .filter(Boolean)
  )
)
/* */
const zoningTypes = Array.from(
  new Set(geoData.features.map(f => f.properties?.ZONING).filter(Boolean))
);

  const handleClearFilters = () => {
    setSelectedType('All');
    setSelectedGrWalkTime([]);
    setSelectedGrBikeTime([]);
    setSelectedGrDriveTime([]);
    setSelectedSchWalkTime([]);
    setSelectedSchBikeTime([]);
    setSelectedSchDriveTime([]);
    setSelectedLiWalkTime([]);
    setSelectedLiBikeTime([]);
    setSelectedLiDriveTime([]);
    setSelectedHeWalkTime([]);
    setSelectedHeBikeTime([]);
    setSelectedHeDriveTime([]);
    setSelectedCuWalkTime([]);
    setSelectedCuBikeTime([]);
    setSelectedCuDriveTime([]);
    setSelectedReWalkTime([]);
    setSelectedReBikeTime([]);
    setSelectedReDriveTime([]);
    setSelectedBuWalkTime([]);
    setSelectedBuBikeTime([]);
    setSelectedGaWalkTime([]);
    setSelectedGaBikeTime([]);
    setSelectedGaDriveTime([]);
    setSelectedEhWalkTime([]);
    setSelectedEhBikeTime([]);
    setSelectedEhDriveTime([]);
    setSelectedPaWalkTime([]);
    setSelectedPaBikeTime([]);
    setSelectedPaDriveTime([]);
    setSelectedZType('All');
    setSelectedSnyZType('All');
    setSelectedWaValue('All');
    setSelectedSeValue('All');
    setSelectedCoValue('All');
    setSelectedWuValue('All');
    setSelectedVType('All'); // Remove?
  };




  return (
    <div className="app-wrapper">
      <Header
        selectedBasemap={selectedBasemap}
        setSelectedBasemap={setSelectedBasemap}
        selectedOverlays={selectedOverlays}
        setSelectedOverlays={setSelectedOverlays}
      />

      <div className="app-container">
        
        <div className="sidebar">
          <div className="grocery-filter">
            <button 
              className="gr-dropdown-toggle"
              onClick={() => setIsParcelOpen(!isParcelOpen)}
            >
              {isParcelOpen ? '▼ Hide Parcel Info' : '▶ Show Parcel Info'}
            </button>

            {isParcelOpen && selectedParcel && (
              <div className="gr-filter-options">
                <ParcelInfo
                  parcel={selectedParcel}
                  onClear={() => setSelectedParcel(null)}
                />
            </div>
          )}

          {isParcelOpen && !selectedParcel && (
            <div className="gr-filter-options" style={{ fontStyle: "italic" }}>
              Click a parcel to view its details.
            </div>
          )}
        </div>


          {/* {isParcelOpen && (
            <ParcelInfo
              parcel={selectedParcel}
              onClear={() => setSelectedParcel(null)}
            />
          )} */}

          <h3>Filters</h3>
          <OwnerTypeFilter
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            ownerTypes={ownerTypes}
          />

          <VacantFilter
            selectedVType={selectedVType}
            setSelectedVType={setSelectedVType}
            vacantTypes={vacantTypes}
          />

          <GroceryDistanceFilter
            selectedGrWalkTime={selectedGrWalkTime}
            setSelectedGrWalkTime={setSelectedGrWalkTime}
            selectedGrBikeTime={selectedGrBikeTime}
            setSelectedGrBikeTime={setSelectedGrBikeTime}
            selectedGrDriveTime={selectedGrDriveTime}
            setSelectedGrDriveTime={setSelectedGrDriveTime}
          />
        
          <SchoolDistanceFilter
            selectedSchWalkTime={selectedSchWalkTime}
            setSelectedSchWalkTime={setSelectedSchWalkTime}
            selectedSchBikeTime={selectedSchBikeTime}
            setSelectedSchBikeTime={setSelectedSchBikeTime}
            selectedSchDriveTime={selectedSchDriveTime}
            setSelectedSchDriveTime={setSelectedGrBikeTime}
          />

          <LibraryDistanceFilter
            selectedLiWalkTime={selectedLiWalkTime}
            setSelectedLiWalkTime={setSelectedLiWalkTime}
            selectedLiBikeTime={selectedLiBikeTime}
            setSelectedLiBikeTime={setSelectedLiBikeTime}
            selectedLiDriveTime={selectedLiDriveTime}
            setSelectedLiDriveTime={setSelectedLiBikeTime}
          />

          <HealthDistanceFilter
            selectedHeWalkTime={selectedHeWalkTime}
            setSelectedHeWalkTime={setSelectedHeWalkTime}
            selectedHeBikeTime={selectedHeBikeTime}
            setSelectedHeBikeTime={setSelectedHeBikeTime}
            selectedHeDriveTime={selectedHeDriveTime}
            setSelectedHeDriveTime={setSelectedHeBikeTime}
          />

          <CultureDistanceFilter
            selectedCuWalkTime={selectedCuWalkTime}
            setSelectedCuWalkTime={setSelectedCuWalkTime}
            selectedCuBikeTime={selectedCuBikeTime}
            setSelectedCuBikeTime={setSelectedCuBikeTime}
            selectedCuDriveTime={selectedCuDriveTime}
            setSelectedCuDriveTime={setSelectedCuDriveTime}
          />

          <RecDistanceFilter
            selectedReWalkTime={selectedReWalkTime}
            setSelectedReWalkTime={setSelectedReWalkTime}
            selectedReBikeTime={selectedReBikeTime}
            setSelectedReBikeTime={setSelectedReBikeTime}
            selectedReDriveTime={selectedReDriveTime}
            setSelectedReDriveTime={setSelectedReDriveTime}
          />  

          <BusDistanceFilter
            selectedBuWalkTime={selectedBuWalkTime}
            setSelectedBuWalkTime={setSelectedBuWalkTime}
            selectedBuBikeTime={selectedBuBikeTime}
            setSelectedBuBikeTime={setSelectedBuBikeTime}
          />    

          <GasDistanceFilter
            selectedGaWalkTime={selectedGaWalkTime}
            setSelectedGaWalkTime={setSelectedGaWalkTime}
            selectedGaBikeTime={selectedGaBikeTime}
            setSelectedGaBikeTime={setSelectedGaBikeTime}
            selectedGaDriveTime={selectedGaDriveTime}
            setSelectedGaDriveTime={setSelectedGaDriveTime}
          /> 

          <EhubDistanceFilter
            selectedEhWalkTime={selectedEhWalkTime}
            setSelectedEhWalkTime={setSelectedEhWalkTime}
            selectedEhBikeTime={selectedEhBikeTime}
            setSelectedEhBikeTime={setSelectedEhBikeTime}
            selectedEhDriveTime={selectedEhDriveTime}
            setSelectedEhDriveTime={setSelectedEhDriveTime}
          /> 

          <ParkDistanceFilter
            selectedPaWalkTime={selectedPaWalkTime}
            setSelectedPaWalkTime={setSelectedPaWalkTime}
            selectedPaBikeTime={selectedPaBikeTime}
            setSelectedPaBikeTime={setSelectedPaBikeTime}
            selectedPaDriveTime={selectedPaDriveTime}
            setSelectedPaDriveTime={setSelectedPaDriveTime}
          /> 

          <ZoningFilter
            selectedZType={selectedZType}
            setSelectedZType={setSelectedZType}
            selectedSnyZType={selectedSnyZType}
            setSelectedSnyZType={setSelectedSnyZType}
          />

          <SpecialRestrictionsFilter
            selectedWaValue={selectedWaValue}
            setSelectedWaValue={setSelectedWaValue}
            selectedSeValue={selectedSeValue}
            setSelectedSeValue={setSelectedSeValue}
            selectedCoValue={selectedCoValue}
            setSelectedCoValue={setSelectedCoValue}
            selectedWuValue={selectedWuValue}
            setSelectedWuValue={setSelectedWuValue}
          />

          <button className="clear-filters-button" onClick={handleClearFilters}>
            Clear All Filters
          </button>
        </div>

        <div className="map-area">
          <WeightsWidget
            weights={weights}
            setWeights={setWeights}
            resetWeights={resetWeights}
          />
          <MyMap 
            
            geoData={geoData}
            
            onParcelClick={setSelectedParcel} selectedParcel={selectedParcel} // Remove?
            weights={weights}
            selectedOwnerType={selectedType}
            selectedVType={selectedVType}
            selectedGrWalkTime={selectedGrWalkTime}
            selectedGrBikeTime={selectedGrBikeTime}
            selectedGrDriveTime={selectedGrDriveTime}
            selectedSchWalkTime={selectedSchWalkTime}
            selectedSchBikeTime={selectedSchBikeTime}
            selectedSchDriveTime={selectedSchDriveTime}
            selectedLiWalkTime={selectedLiWalkTime}
            selectedLiBikeTime={selectedLiBikeTime}
            selectedLiDriveTime={selectedLiDriveTime}
            selectedHeWalkTime={selectedHeWalkTime}
            selectedHeBikeTime={selectedHeBikeTime}
            selectedHeDriveTime={selectedHeDriveTime}
            selectedCuWalkTime={selectedCuWalkTime}
            selectedCuBikeTime={selectedCuBikeTime}
            selectedCuDriveTime={selectedCuDriveTime}
            selectedReWalkTime={selectedReWalkTime}
            selectedReBikeTime={selectedReBikeTime}
            selectedReDriveTime={selectedReDriveTime}
            selectedBuWalkTime={selectedBuWalkTime}
            selectedBuBikeTime={selectedBuBikeTime}
            selectedGaWalkTime={selectedGaWalkTime}
            selectedGaBikeTime={selectedGaBikeTime}
            selectedGaDriveTime={selectedGaDriveTime}
            selectedEhWalkTime={selectedEhWalkTime}
            selectedEhBikeTime={selectedEhBikeTime}
            selectedEhDriveTime={selectedEhDriveTime}
            selectedPaWalkTime={selectedPaWalkTime}
            selectedPaBikeTime={selectedPaBikeTime}
            selectedPaDriveTime={selectedPaDriveTime}
            selectedZType={selectedZType}
            selectedSnyZType={selectedSnyZType}
            selectedWaValue={selectedWaValue}
            selectedSeValue={selectedSeValue}
            selectedCoValue={selectedCoValue}
            selectedWuValue={selectedWuValue}
            selectedBasemap={selectedBasemap}
            selectedOverlays={selectedOverlays}
          />
        </div>
      </div>
      <Footer className="app-footer"/>
    </div>
  );
}

export default App;
