import { Link } from "react-router-dom"

export const FlightCard = ({ id, numberOfBookableSeats, lastTicketingDate, totalPrice, currency }) => {
    return(
        <div>
            <div>
                <p>{`Opción: ${id}`}</p>
                <p>{`Asientos disponibles: ${numberOfBookableSeats}`}</p>
                <p>{`Último día para reservar: ${lastTicketingDate}`}</p>
            </div>
            <div>
                <p>{`${totalPrice} ${currency}`}</p>
            </div>
            <Link to={`/flight/${id}`}>
                Ver itinerarios
            </Link>
        </div>
    )
}