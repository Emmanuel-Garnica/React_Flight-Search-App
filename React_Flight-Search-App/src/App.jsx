import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FlightCard } from './components/Flights/FlightCard';
import { FlightsForm } from './components/FlightsForm/FlightsForm';

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
