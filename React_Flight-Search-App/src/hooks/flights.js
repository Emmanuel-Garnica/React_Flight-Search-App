import { useState } from "react"
import axios from "axios"

axios.defaults.baseURL = "https://test.api.amadeus.com";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.get["Authorization"] = "Bearer XwAbehYSoDo9q9AeiaXP0z1ZcVPz";

const useFlights = () => {
    const [flights, setFlights] = useState([])

    const getFlights = ({ originCode, destinationCode, departureDate, adults }) => {
        axios.get(`/v2/shopping/flight-offers?originLocationCode=${originCode}&destinationLocationCode=${destinationCode}&departureDate=${departureDate}&adults=${adults}`)
        .then((respuesta) => {
            setFlights(respuesta.data.data)
            console.log(respuesta.data.data)
        })
    }

    return {
        flights, getFlights
    }   
    
}

export default useFlights;