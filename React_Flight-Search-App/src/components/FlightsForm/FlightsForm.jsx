import axios from "axios"
import { Flights } from "../Flights/Flights"
import { Datepicker } from "../FormElements/Datepicker"
import { CustomSelect } from "../FormElements/ReactSelect"
import qs from "qs"
import { useState } from "react"

axios.defaults.baseURL = "https://test.api.amadeus.com";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

export const FlightsForm = () => {
    const [flights, setFlights] = useState([])

    const tokenRequestBody = 
     {
        grant_type: 'client_credentials',
        client_id: '1KLI22z0GGAHXq6fMrQiGfmPGGWfDP8o',
        client_secret: 'LlvmGJ7mb9CSxPG1'
    }

    const getFlightsData = ({ originCode, destinationCode, departureDate, adults }) => {

        axios({
            method: 'post',
            url: '/v1/security/oauth2/token',
            data: qs.stringify(tokenRequestBody)
        })
        .then((result) => {
            axios.get(`/v2/shopping/flight-offers?originLocationCode=${originCode}&destinationLocationCode=${destinationCode}&departureDate=${departureDate}&adults=${adults}`, {
                headers: {
                    "Authorization": `Bearer ${result.data.access_token}`
                }
            })
            .then((respuesta) => {
                setFlights(respuesta.data.data)
            })
        })
        
    }

    async function getFlights (event) {
        event.preventDefault();

        const { originLocation, destinationLocation, departureDate, adults } = event.currentTarget;
        const body = {
        originCode: originLocation.value,
        destinationCode: destinationLocation.value,
        departureDate: departureDate.value,
        // returnDate: returnDate.value,
        adults: adults.value
        }
        getFlightsData(body)
    }

  return (
  
    <section>
        <article className="App relative flex flex-col justify-center min-w-screen lg:min-h-screen py-16 bg-[url(./assets/images/img-searcher-bgImage-2022.jpg)] bg-center bg-cover">

            <h2 className='self-center font-Futura font-bold tracking-wide text-white text-4xl text-center drop-shadow-lg shadow-black mx-4 mt-20 mb-8 lg:mt-0 lg:text-5xl'>
            Busca tu próximo destino:
            </h2>

            <form onSubmit={getFlights} className='flex flex-wrap justify-between gap-6 p-4 mx-auto w-full max-w-[90%] rounded-xl bg-white shadow-2xl lg:p-8'>
            <div className="flex flex-col items-start w-full font-futura lg:w-[48%] xl:w-[29%]">
                <label htmlFor="" className="font-bold text-lg">
                Origen:
                </label>
                <CustomSelect 
                name="originLocation"
                options={[
                    { value: 'BOG', label: 'BOG' },
                    { value: 'MED', label: 'MED' },
                    { value: 'MEX', label: 'MEX' }
                ]}
                />
            </div>

            <div className="flex flex-col items-start w-full font-futura lg:w-[48%] xl:w-[29%]">
                <label htmlFor="" className="font-bold text-lg">
                Destino:
                </label>
                <CustomSelect 
                name="destinationLocation"
                options={[
                    { value: 'BOG', label: 'BOG' },
                    { value: 'MED', label: 'MED' },
                    { value: 'MEX', label: 'MEX' }
                ]}
                />
            </div>

            <div className="flex flex-col items-start w-full font-futura lg:w-[29%] xl:w-[15%]">
                <label htmlFor="" className="font-bold text-lg">
                Ida:
                </label>
                <Datepicker name="departureDate"></Datepicker>
            </div>

            {/* <div className="flex flex-col items-start w-full font-futura lg:w-[29%] xl:w-[15%]">
                <label htmlFor="" className="font-bold text-lg">
                Regreso:
                </label>
                <Datepicker name="returnDate"></Datepicker>
            </div> */}

            <div className="flex flex-col items-start justify-center w-full font-futura lg:w-[16.25%]">
                <label htmlFor="" className="font-bold text-lg">
                Adultos:
                </label>
                <CustomSelect 
                name="adults"
                options={[
                    { value: '1', label: '1' },
                    { value: '2', label: '2' },
                    { value: '3', label: '3' },
                    { value: '4', label: '4' },
                    { value: '5', label: '5' },
                    { value: '6', label: '6' },
                    { value: '7', label: '7' },
                    { value: '8', label: '8' },
                    { value: '9', label: '9' }
                ]}
                />
            </div>

            {/* <div className="flex flex-col items-start justify-center w-full font-futura lg:w-[16.25%]">
                <label htmlFor="" className="font-bold text-lg">
                Niños:
                </label>
                <CustomSelect/>
            </div> */}

            <button className='font-futura font-bold text-xl text-[#1A4762] bg-[#F1C933] rounded-lg py-2 px-16 mt-8 lg:py-4 transition-all hover:scale-105 hover:bg-opacity-90 lg:px-[120px] xl:ml-auto xl:py-2' type='submit'>
                Buscar
            </button>
            </form> 

            <a href="#flightResults" className='group absolute bottom-12 left-1/2 animate-bounce mx-auto'>
            <svg width="40" height="40" viewBox="0 0 69 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='group-hover:fill-[#F1C933]' d="M67.7966 5.55466C68.2655 5.0627 68.5 4.44775 68.5 3.7713C68.5 3.09485 68.2655 2.4799 67.7966 1.98794C66.8586 1.00402 65.3345 1.00402 64.3966 1.98794L34.5 33.3505L4.60345 1.98794C3.66552 1.00402 2.14138 1.00402 1.20345 1.98794C0.265517 2.97186 0.265517 4.57074 1.20345 5.55466L32.8 38.7621C33.7379 39.746 35.2621 39.746 36.2 38.7621L67.7966 5.55466Z" fill="white"/>
            </svg>
            </a>     

        </article>

        <Flights flights={flights}></Flights>
        
    </section>
    )
}