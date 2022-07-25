
import reactLogo from './assets/react.svg'
import './App.css'
import { Datepicker } from './components/FormElements/Datepicker';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Products } from './components/Products/Product';
import { ProductDetail } from './components/ProductDetail/ProductDetail';
import { CustomSelect } from './components/FormElements/ReactSelect';
import { Flights } from './components/Flights/Flights';
import { FlightCard } from './components/Flights/FlightCard';

function App() {

  return (
  
    <div>
      <section className="App flex flex-col justify-center min-w-screen lg:min-h-screen py-16 bg-[url(./assets/images/img-searcher-bgImage-2022.jpg)] bg-center bg-cover">

      <h2 className='self-center font-Futura font-bold tracking-wide text-white text-4xl text-center drop-shadow-lg shadow-black mx-4 mt-20 mb-8 lg:text-5xl'>
        Busca tu próximo destino:
      </h2>

      <form action="" className='flex flex-wrap justify-between gap-6 p-4 mx-auto w-full max-w-[90%] rounded-xl bg-white shadow-2xl lg:p-8'>
        <div className="flex flex-col items-start w-full font-futura lg:w-[48%] xl:w-[29%]">
          <label htmlFor="" className="font-bold text-lg">
            Origen:
          </label>
          <CustomSelect/>
        </div>
        
        <div className="flex flex-col items-start w-full font-futura lg:w-[48%] xl:w-[29%]">
          <label htmlFor="" className="font-bold text-lg">
            Destino:
          </label>
          <CustomSelect/>
        </div>

        <div className="flex flex-col items-start w-full font-futura lg:w-[29%] xl:w-[15%]">
          <label htmlFor="" className="font-bold text-lg">
            Ida:
          </label>
          <Datepicker></Datepicker>
        </div>

        <div className="flex flex-col items-start w-full font-futura lg:w-[29%] xl:w-[15%]">
          <label htmlFor="" className="font-bold text-lg">
            Regreso:
          </label>
          <Datepicker></Datepicker>
        </div>

        <div className="flex flex-col items-start justify-center w-full font-futura lg:w-[16.25%]">
          <label htmlFor="" className="font-bold text-lg">
            Adultos:
          </label>
          <CustomSelect/>
        </div>

        <div className="flex flex-col items-start justify-center w-full font-futura lg:w-[16.25%]">
          <label htmlFor="" className="font-bold text-lg">
            Niños:
          </label>
          <CustomSelect/>
        </div>

        <button className='font-futura font-bold text-xl text-[#1A4762] bg-[#F1C933] rounded-lg py-2 px-16 mt-8 lg:py-4 transition-all hover:scale-110 hover:bg-opacity-90 lg:px-[120px] xl:ml-auto xl:py-2' type='submit'>
          Buscar
        </button>
      </form>      

    </section>
    
      <Router>
        <Flights></Flights>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
          
          <Route path='/flight/:id' element={<FlightCard/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
