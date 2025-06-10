import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";


export default function SearchBox({ updateinfo }) {
    let [city , setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "fc783387f301021c5175b5a4509a7580";

    let getweatherinfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            mintemp : jsonResponse.main.temp_min,
            maxtemp : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelslike : jsonResponse.main.feels_like,
            Weather : jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
    };


    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSumbit = async(evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("")
        let newinfo = await getweatherinfo();
        updateinfo(newinfo);
    }


  return (
    <div onSubmit={handleSumbit} className='SearchBox'>
        <form>
            <TextField id="city" label="City Name" variant="outlined" value= {city} onChange={handleChange} required/>
            <br /> 
            <br />
            <Button variant="contained" type='submit'>Search</Button>
        </form>
    </div>
    
  )
}
