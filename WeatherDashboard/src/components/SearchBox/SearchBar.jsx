import React, { useContext } from 'react';
import context from '../../context/Context';
import Context from '../../context/Context';
import TodaysWeather from '../TodaysWeather/TodaysWeather';

function SearchBar(){
    const {data,setData} = useContext(Context);

    function SearchCity(){
        let searchbar = document.querySelector('#searchbar');
        let city = searchbar.value;
        try{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0c855015a08dbc49195d1c519beb1b9`).then((response)=> response.json()).then((data)=>setData(data)).catch((e)=>console.log(e));
            console.log(data);
        }catch(e){
            console.log(e);
        }
        // weather = weather.json();
    }
    return(

<div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-6'>
  <div className='w-full max-w-md'>
    {/* Card */}
    <div className='relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-blue-900/40'>
      
      {/* Glow accent */}
      <div className='absolute -top-px left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent' />

      {/* Header */}
      <div className='mb-8 text-center'>
        <span className='text-3xl'>🌤</span>
        <h1 className='mt-2 text-xl font-bold tracking-tight text-white'>Weather Dashboard</h1>
        <p className='text-xs text-blue-300/60 mt-1 tracking-widest uppercase'>Live Forecast</p>
      </div>

      {/* Search input */}
      <div className='relative mb-4'>
        <span className='absolute left-4 top-1/2 -translate-y-1/2 text-blue-400 text-sm'>📍</span>
        <input
          type='text'
          id='searchbar'
          placeholder='Enter city name...'
          className='w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-400/50 focus:bg-white/8 transition-all duration-200'
        />
      </div>

      {/* Button */}
      <button
        onClick={SearchCity}
        className='w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm tracking-wide hover:from-blue-400 hover:to-cyan-400 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98] transition-all duration-200'
      >
        Check Weather
      </button>
       <TodaysWeather/>
    </div>
  </div>
 
        </div>

    )
}
export default SearchBar