
import reactLogo from './assets/react.svg'
import './App.css'
import { Datepicker } from './Datepicker';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Products } from './components/Products/Product';
import { ProductDetail } from './components/ProductDetail/ProductDetail';

function App() {

  return (
  
    <div>
        <div className="App flex flex-col justify-center min-w-screen min-h-screen bg-[url(./assets/images/img-searcher-bgImage-2022.jpg)] bg-center bg-cover">

      <h2 className='self-center font-Futura text-white'>
        Busca tu próximo destino:
      </h2>

      <form action="" className='flex justify-center gap-6 p-4 mx-auto w-full max-w-[90%] rounded-xl bg-white shadow-2xl'>
        <div className="flex flex-col items-start">
          <label htmlFor="">
            Origen:
          </label>
          <input type="text" />
        </div>
        
        <div className="flex flex-col items-start">
          <label htmlFor="">
            Destino:
          </label>
          <input type="text" />
        </div>

        <div className="flex flex-col items-start">
          <label htmlFor="">
            Ida:
          </label>
          <Datepicker></Datepicker>
        </div>

        <div className="flex flex-col items-start">
          <label htmlFor="">
            Regreso:
          </label>
          <Datepicker></Datepicker>
        </div>

        <div className="flex flex-col items-start justify-center">
          <label htmlFor="">
            Adultos:
          </label>
          <select name="" id="" className='w-full'>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="flex flex-col items-start justify-center">
          <label htmlFor="">
            Niños:
          </label>
          <select name="" id="" className='w-full'>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button type='submit'>Buscar</button>
      </form>      

    </div>
      <Router>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
