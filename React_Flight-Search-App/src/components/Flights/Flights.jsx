import axios from "axios"
import { FlightCard } from "./FlightCard";


export const Flights = ({flights}) => {

    console.log(flights)

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

    

    return(
        <section id="flightResults" className="pt-1">
            <h3 className="self-center font-futura font-bold tracking-wide text-[#555555] text-4xl text-center drop-shadow-lg shadow-black mx-4 my-12 lg:mb-20 lg:text-4xl">
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