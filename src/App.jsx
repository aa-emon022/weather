// App.js
import React, { useState } from 'react';
import LocationInput from './components/LocationInput';
import WeatherDisplay from './components/SearchWeatherDisplay';
import axios from 'axios';
import LocationWeatherDisplay from './components/locationWeatherDisplay';


const API_KEY = '6094714198d2b6feb38037701430f122';

const App = () => {
  const [weather, setWeather] = useState(null);

  const getWeather = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );

      const { name: locationName, sys, main, weather: weatherInfo ,wind:windInfo } = response.data;

      setWeather({
        location: locationName,
        country: sys.country,
        temperature: main.temp,
        wind:windInfo,
        condition: weatherInfo[0].main,
      });
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      setWeather(null);
    }
  };

  return (
  <>
     <div className=' pt-9 bg-cover h-screen ' style={{ backgroundImage: "url('https://yesofcorsa.com/wp-content/uploads/2020/05/4K-Weather-Desktop-Wallpaper-HD.jpg')" }}>
  <h1 className='text-center font-bold font-serif text-[3rem] text-rose-100'>Weather App</h1>
 
 <div className='flex flex-wrap justify-center gap-3 pb-9'>
 <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
  <LocationInput onLocationChange={getWeather} />
   
  
  </div>
 

 <div className=' bg-gradient-to-r from-cyan-500 to-blue-500 pb-[1.2rem]'>
  <WeatherDisplay weather={weather} />
  </div>
 </div>
</div>

  </>
  );
};

export default App;
