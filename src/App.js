import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//import logo from './logo.svg';
import './App.css';
import teslaData from "./data/tesla-sites.json"
import L from "leaflet";
// Used to fetch remote data
import useSwr from "swr";
// Used to cluster points
import useSupercluster from "use-supercluster";


//var myIcon = L.divIcon({className: 'icon-style'});




function App() {


  const filteredStations = teslaData.filter(tsla => tsla.address.state==="TX")
  return (
    <MapContainer center={[31.169621, -99.683617]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {filteredStations.map(tsla => ( 
        <Marker key = {tsla.id} position={[tsla.gps.latitude, tsla.gps.longitude]} >
                
          <Popup position={[tsla.gps.latitude, tsla.gps.longitude]}>
            <div>
              <h2>{"Name: "+ tsla.name}</h2>
              <p>{"Status:"+tsla.status}</p>
              <p>{"No.of charging stations:"+tsla.stallCount}</p>
            </div>
            </Popup>
            </Marker>


      ))}

    </MapContainer>
  );
}

export default App;
