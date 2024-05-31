import React, { useEffect, useState } from 'react'
import Map from './components/Map';

const App = () => {
  const [location,setLocation] = useState({lat: 20.5937, lon: 78.9629}) //India's Latitude and Longitude

  useEffect(()=>{
    const fetchingLocation = async() => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        setLocation({lat : data.latitude,lon : data.longitude})
      }
      catch (error) {
        console.error(`Error fetching IP location data : ${error}`)
      }
    }
    fetchingLocation()
  }, []);
  return (
    <>
    <div className='mainApp'>
      <Map lat={location.lat} lon={location.lon} />
    </div>
    </>
  )
}

export default App

