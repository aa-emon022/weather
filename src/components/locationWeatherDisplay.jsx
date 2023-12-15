import React from 'react'

export default function LocationWeatherDisplay({locationWeather}) {
    console.log(locationWeather);
  return (
    <div className='text-[#EBE3DB] text-[1.2rem] flex flex-col flex-wrap justify-center items-center'>
        <h2 className='text-[#FFA500] sm:text-[1.8rem] '>Your Location Weather Details</h2>
        {locationWeather ? (
            locationWeather.condition == "Rain" ? (
            <>
              <img className='w-[12rem] h-[6rem] object-cover' src='https://wallpapers.com/images/hd/free-rain-wallpaper-full-hd-3dbvab1yrrbwpxbr.jpg' alt='Rainy weather'/>
              <p ><span className='text-[1.3rem] text-[#0d0d0d] '>Location:</span> {locationWeather.location}, {weather.country}</p>
              <p> <span className='text-[1.3rem] text-[#0d0d0d] '>Temperature:</span> {locationWeather.temperature}°C</p>
              <p><span className='text-[1.3rem] text-[#0d0d0d] '>Weather:</span> {locationWeather.condition}</p>
             
            </>
          ) : (
            <>
              <img className='w-[12rem] h-[6rem] object-cover' src='https://free4kwallpapers.com/uploads/originals/2015/09/16/weather-live-wallpaper-icon.jpg' alt='Other weather'/>
              <p><span className='text-[1.3rem] text-[#0d0d0d] '>Location:</span>{locationWeather.location}, {locationWeather.country}</p>
              <p><span className='text-[1.3rem] text-[#0d0d0d] '>Temperature:</span> {locationWeather.temperature}°C</p>
              <p><span className='text-[1.3rem] text-[#0d0d0d] '>Weather:</span> {locationWeather.condition}</p>
            </>
          )
        ) : (
          <p>No weather data available.</p>
        )}
      </div>
  )
}
