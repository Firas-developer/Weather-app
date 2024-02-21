import axios from "axios";
import { useState } from "react"

function Weather() {
    const[value,setValue]=useState("");
    const[weather,setWeather] = useState("")
    const[temperature,setTemperature] = useState("")
    const[description,setDescription] = useState("")
    function handleInput(event){
        setValue(event.target.value)
    }
    function getReport(){
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=0649ffd4aae55aaa46f2c096da76560b`)
        weatherData.then(function(success){
           setWeather(success.data.weather[0].main)
           setTemperature(success.data.main.temp)
           setDescription(success.data.weather[0].description)
        })
        setValue("")
    }
    return (
        <div className="bg-black p-20">
            <div className="bg-green-500 p-10">
                <h1 className="text-3xl font-medium">Weather Report</h1>
                <p>I can give you a weather report about your city!</p>
                <input value={value} onChange={handleInput} className="my-2 p-1 rounded-md" type="text" placeholder="Enter your City name" /> <br/>
                <button onClick={getReport} className="bg-black p-1 text-white rounded-md my-2">Get Report</button>
                <h1 className="font-medium text-lg">Weather: {weather}</h1>
                <h1 className="font-medium text-lg">Temperature: {temperature}</h1>
                <h1 className="font-medium text-lg">Description: {description}</h1>
            </div>
        </div>
    )
}
export default Weather