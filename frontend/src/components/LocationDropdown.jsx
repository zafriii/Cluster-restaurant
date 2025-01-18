import React, {useState} from 'react'
import { FaLocationDot } from "react-icons/fa6";
import './location.css'


function LocationDropdown() {

    const locations = [
        { id: 1, location: "Mirer Maidan" },
        { id: 2, location: "Shubid Bazar" },
        { id: 3, location: "Chowhatta" },
        { id: 4, location: "Nayasarak" },
        { id: 5, location: "Shibganj" },
        { id: 6, location: "Kumarpara" },
        { id: 7, location: "Madina Market" },
        { id: 8, location: "Pathantula" },
        { id: 9, location: "Bagbari" },
        { id: 10, location: "Akhalia" }
      ];
      
      
        const [selectedLocation, setSelectedLocation] = useState('');
      
        const handleLocationChange = (e) => {
          setSelectedLocation(e.target.value);
        
    }

  return (


    <div className='location-dropdown'>

    <label htmlFor="location"> <FaLocationDot className="location-icon"/> </label>
      <select id="location" value={selectedLocation} onChange={handleLocationChange}>
        <option value="">Select Location</option>
        {locations.map(location => (
          <option key={location.id} value={location.location}>{location.location}</option>
        ))}
      </select>
     

    </div>
  )
}

export default LocationDropdown