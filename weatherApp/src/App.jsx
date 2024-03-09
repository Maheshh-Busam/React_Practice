import { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import SunImg from './assets/sun.png'
import CloudImg from './assets/cloud.png'
import RainyImg from './assets/rainy.png'

function App() {
  const [city, setCity] = useState('');
  const [result, setResult] = useState();
  const [cityData, setCityData] = useState([])
  const [weatherIcon, setWeatherIcon] = useState('');

  const submitHandler = (e) => {
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9c663754e3e98b4be40cfc833ea432d2`)
      .then(response => response.json())
      .then(data => {
        setCityData(data)
        const kelvin = data.main.temp;
        const celsius = kelvin - 273.15;
        setResult("Weather at " + " " + city + " " + Math.round(celsius) + "°C");

        // Set weather icon based on temperature
        if (celsius > 30) {
          setWeatherIcon('sun');
        } else if(20 < celsius && celsius < 30){
          setWeatherIcon('clouds');
        }
        else{
          setWeatherIcon('rainy');
        }
      })
  };

  return (
    <div className=" h-screen ">
      <h1 className="text-5xl pt-4 pb-4 text-center text-blue-500 shadow-md rounded-md font-bold">Weather Application</h1>
      <div className="flex max-h-screen mb-5 mt-5 justify-center w-fit  m-auto bg-white rounded-3xl" >
        <div className="p-10 shadow-xl rounded-3xl ">
          <h1 className="text-2xl font-bold mb-4">Please Enter the City</h1>
          <input
            type="text"
            className="border border-gray-300 rounded-2xl px-3 py-2 w-full mb-4"
            placeholder="Enter the city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-2xl"
            onClick={submitHandler}
          >
            Get Temperature
          </button>
          <div className="flex flex-col items-center mt-4">
            <div className="mr-4">
              {weatherIcon === 'sun' && (
                <img src={SunImg} alt="Sun" className="w-20 h-20" />
              )}
              {weatherIcon === 'clouds' && (
                <img src={CloudImg} alt="Clouds" className="w-20 h-20" />
              )}
              {weatherIcon === 'rainy' && (
                <img src={RainyImg} alt="Clouds" className="w-20 h-20" />
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1">{result}</h1>
              {cityData.weather && (
                <h1 className="text-2xl text-center font-bold mb-1" style={{ textTransform: 'uppercase', color: 'blue' }}>{cityData.weather[0].description}</h1>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
