// WeatherDisplay.js
import React from 'react';

const WeatherDisplay = ({ weather }) => {
  return (
    <>
      <div className='text-center text-[1.3rem]'>
        <h2 className='pt-[2rem] pb-[1rem]'>Weather Details</h2>
        {weather ? (
          weather.condition == "Rain" || weather.condition == "Clouds" ? (
            <div className='flex flex-col flex-wrap justify-center px-[4rem] '>
              <img className='w-[12rem] h-[6rem] object-cover' src='https://wallpapers.com/images/hd/free-rain-wallpaper-full-hd-3dbvab1yrrbwpxbr.jpg' alt='Rainy weather'/>
              <p>Location: {weather.location}, {weather.country}</p>
              <p>Temperature: {weather.temperature}°C</p>
              <p>Weather: {weather.condition}</p>
              
            </div>
          ) : (
            <div className='flex flex-col flex-wrap justify-center px-[4rem] '>
              <img className='w-[12rem] h-[6rem] object-cover'  src='https://free4kwallpapers.com/uploads/originals/2015/09/16/weather-live-wallpaper-icon.jpg' alt='Other weather'/>
              <p>Location: {weather.location}, {weather.country}</p>
              <p>Temperature: {weather.temperature}°C</p>
              <p>Weather: {weather.condition}</p>
            </div>
          )
        ) : (
          <p className='text-[1.8rem]'>No weather data available.</p>
        )}
      </div>
    </>
  );
};

export default WeatherDisplay;
