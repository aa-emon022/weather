// LocationInput.js
import React, { useEffect, useState } from "react";
import axios from "axios"; // Make sure to import axios

import LocationWeatherDisplay from "./locationWeatherDisplay";
const API_KEY = "6094714198d2b6feb38037701430f122";
const LocationInput = ({ onLocationChange }) => {
  const [location, setLocation] = useState("");
  const [locationWeather, locationSetWeather] = useState(null);
  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.error("Geolocation is not supported in this browser.");
    }
  };

  const showPosition = (position) => {
    const { latitude, longitude } = position.coords;
    // Use axios to make the API call
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        const {
          name: locationName,
          sys,
          main,
          weather: weatherInfo,
          wind: windInfo,
        } = response.data;
        locationSetWeather({
          location: locationName,
          country: sys.country,
          temperature: main.temp,
          wind: windInfo,
          condition: weatherInfo[0].main,
        });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error.message);
        locationSetWeather(null);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLocationChange(location);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-[.5rem] md:gap-[1.6rem] px-[3rem] py-[3rem] md:px-[3rem] text-white text-[1.2rem]"
      >
        <button type="button" onClick={handleLocationClick} className="border-2 bg-black border-black">
          Use My Location
        </button>

        <label >
          <span className="border-2 bg-black border-black pr-[.5rem] ">Enter Location:</span>
          <input
            type="text"
            value={location}
            onChange={handleInputChange}
            className="focus:outline-none focus:border-2 focus:border-blue-300 text-black"
          />
        </label >
        <button type="submit" className="border-2 bg-black border-black">Get Weather</button>
      </form>
      <LocationWeatherDisplay locationWeather={locationWeather} />
    </>
  );
};

export default LocationInput;
