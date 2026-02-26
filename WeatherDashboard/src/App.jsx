import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBox/SearchBar'
import TodaysWeather from './components/TodaysWeather/TodaysWeather'
import ContextProvider from './context/ContextProvider'

function App() {

  return (
    
    <ContextProvider>
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-6'>
    <div className='w-full max-w-md flex flex-col gap-4'>
    <SearchBar/>
    </div>
  </div>
    </ContextProvider>
  )
}

export default App
