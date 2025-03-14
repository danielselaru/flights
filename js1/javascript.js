import { airlines } from "./airlines.js";
import { airplanes } from "./airplanes.js";
import { airports } from "./airports.js";
import { flights } from "./flights.js";
import { API_KEY } from "./json.js";


const div_flights = document.querySelector(".flights")
const div_airlines = document.querySelector(".airlines")
const div_airports = document.querySelector(".airports")
const div_airplanes = document.querySelector(".airplanes")

const arr_flights = flights;
const arr_airlines = airlines;
const arr_airplanes = airplanes;
const arr_airports = airports;

for(let i = 0 ; i <= flights.length ; i++){
    const element = flights[i];
    console.log(element)
    const flight_date1 = element.flight_date
    const flight_status = element.flight_status;
    const airports = element.departure.airport
    

    div_flights.innerHTML +=`
    <div class = "flights">
    <p> Data zborului : <span class="style">${flight_date1}</span> | aeroport : <span class="style">${airports}</span> | status : <span class="style">${flight_status}</span></p>
    </div>
    `
}

