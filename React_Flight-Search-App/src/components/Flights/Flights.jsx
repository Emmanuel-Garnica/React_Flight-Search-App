import axios from "axios"
import { useEffect, useState } from "react"
import { FlightCard } from "./FlightCard";

axios.defaults.baseURL = "https://test.api.amadeus.com";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.get["Authorization"] = "Bearer MhEA8R2QjZ3H3Fr3i8y7AgLiFRgv";

export const Flights = () => {

    const[flights, setFlights] = useState([])

    // const tokenRequestBody = {
    //     grant_type: 'client_credentials',
    //     client_id: '1KLI22z0GGAHXq6fMrQiGfmPGGWfDP8o',
    //     client_secret: 'LlvmGJ7mb9CSxPG1'
    // }

    // useEffect(() => {
    //     axios.post('/v1/security/oauth2/token', tokenRequestBody)
    //     .then((result) => {
    //         console.log(result)
    //     })
    // })

    useEffect(() => {
        axios.get('/v2/shopping/flight-offers?originLocationCode=BOG&destinationLocationCode=MEX&departureDate=2022-10-06&adults=1')
        .then((respuesta) => {
            console.log(respuesta.data.data)
            setFlights(respuesta.data.data)
        })
    }, [])

    return(
        <section>
            <h3 className="self-center font-Futura font-bold tracking-wide text-[#1A4762] text-4xl text-center drop-shadow-lg shadow-black mx-4 my-12 lg:text-4xl">
                Vuelos encontrados
            </h3>
            {flights && flights.map((flight) => {
                return(
                    <FlightCard
                        key={flight.id}
                        id={flight.id}
                        numberOfBookableSeats={flight.numberOfBookableSeats}
                        lastTicketingDate={flight.lastTicketingDate}
                        totalPrice={flight.price.total}
                        currency={flight.price.currency}
                    />
                )
            })

            }
        </section>

    )

}