import React, { useContext } from 'react';
import context from '../../context/Context';

function TodaysWeather(){
    const {data} = useContext(context);
    let temperature = '';
    let humidity = '';
    let windSpeed = '';
    let iconUrl = '';

    if(!data || !data.main || typeof data.main.temp === 'undefined'){
        temperature = 'Enter city';
    } else {
        temperature = Math.round((data.main.temp - 273.15));
        humidity = data.main.humidity ?? '';
        windSpeed = data.wind?.speed ?? '';

        const iconCode = data.weather && data.weather[0] && data.weather[0].icon;
        if(iconCode){
            iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        }
    }

    return(
        <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-6'>
  <div className='w-full max-w-md'>
    {/* Card */}
    <div className='relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-blue-900/40'>

      {/* Glow accent */}
      <div className='absolute -top-px left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent' />

      <div className='flex items-center justify-between gap-6'>

        {/* Left: Weather Stats */}
        <div className='flex-1 space-y-4'>

          {/* Temperature — hero stat */}
          <div>
            <p className='text-xs text-blue-300/60 tracking-widest uppercase mb-1'>Temperature</p>
            <p className='text-4xl font-bold text-white tracking-tight'>
              {temperature}<span className='text-xl text-blue-300/70 font-normal'>°C</span>
            </p>
          </div>

          {/* Divider */}
          <div className='w-full h-px bg-white/5' />

          {/* Secondary stats */}
          <div className='space-y-2'>
            <div className='flex items-center gap-2'>
              <span className='text-sm'>💧</span>
              <span className='text-xs text-blue-300/60 uppercase tracking-wider w-20'>Humidity</span>
              <span className='text-sm font-medium text-white'>{humidity}</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-sm'>💨</span>
              <span className='text-xs text-blue-300/60 uppercase tracking-wider w-20'>Wind</span>
              <span className='text-sm font-medium text-white'>{windSpeed}</span>
            </div>
          </div>
        </div>

        {/* Right: Weather Icon */}
        <div className='relative flex-shrink-0'>
          <div className='w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-white/10 flex items-center justify-center shadow-inner'>
            {iconUrl ? (
              <img src={iconUrl} alt='weather icon' className='w-16 h-16 drop-shadow-lg' />
            ) : (
              <span className='text-3xl'>🌡️</span>
            )}
          </div>
          {/* subtle glow behind icon */}
          <div className='absolute inset-0 rounded-2xl bg-blue-400/10 blur-xl -z-10' />
        </div>

      </div>
    </div>
  </div>
</div>
    )
}

export default TodaysWeather;