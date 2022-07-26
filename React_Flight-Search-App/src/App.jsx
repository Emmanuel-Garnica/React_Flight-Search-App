import './App.css'
import { Datepicker } from './components/FormElements/Datepicker';
import { useEffect, useState } from "react"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomSelect } from './components/FormElements/ReactSelect';
import { Flights } from './components/Flights/Flights';
import { FlightCard } from './components/Flights/FlightCard';
import axios from 'axios';
import { FlightsForm } from './components/FlightsForm/FlightsForm';

axios.defaults.baseURL = "https://test.api.amadeus.com";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.get["Authorization"] = "Bearer Wdm0CDooojq8afV5NI5Pp0d4a6e8";

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<FlightsForm/>}/>          
        <Route path='/flight/:id' element={<FlightCard/>}/>
      </Routes>
    </Router>
      
  )
}

export default App
