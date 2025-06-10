import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    const [weatherInfo , setweatherInfo] = useState({
        city : "Delhi",
        Weather : "clear sky",
        feelslike : 38.68,
        humidity : 9,
        maxtemp : 41.94,
        mintemp : 41.94,
        temp : 41.94,
    });

    let updateinfo = (newinfo) => {
        setweatherInfo(newinfo); 
    };


  return (
    <div style={{textAlign: "center"}} >
        <h2><u>Weather App (By Dhruv)</u></h2>
        <SearchBox updateinfo={updateinfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  )
}
