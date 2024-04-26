import React, { useState } from 'react';
import './WeatherFetch.css';
import temp from './images/temp.png';
import humid from './images/humid.png';
import wind from './images/wind.png';
import pressure from './images/pressure.png';

function WeatherFetch() {
    const [name, setName] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const handleSubmit = async () => {
        const apiKey = '327b3b38104a194f089f3659688cc98c';
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

        const url = `${apiUrl}?q=${name}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                setWeatherData(data);
            } else {
                alert('Enter Valid City Name');
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data');
        }
    };

    return (
        <div className='weather'>
            <div className="weatherinput">
                <label>Enter City Name: </label><br /><br />
                <input type='text' placeholder='Enter city Name' onChange={(e) => { setName(e.target.value) }} name='city' /> <br /> <br /><br />
                <button className='weatherbutton' type='submit' onClick={handleSubmit}>Submit</button>
            </div>
            <div className="showdata">
                {weatherData && (
                    <>
                        <div className="card">
                            <div className="container">
                                <div className="temp">
                                    <img src={temp} alt='' id='temp' />
                                    <h4>Temperature</h4>
                                </div>
                                <div>
                                    <h2>{weatherData.main && weatherData.main.temp}°C</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="container">
                                <div className='humid'>
                                    <img src={humid} alt='' id='humid' />
                                    <h4>Humidity</h4>
                                </div>
                                <div>
                                    <h2>{weatherData.main && weatherData.main.humidity}%</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="container">
                                <div className="wind">
                                    <img src={wind} alt='' id='wind' />
                                    <h4>Wind</h4>
                                </div>
                                <div>
                                    <h2>{weatherData.wind && weatherData.wind.speed} km/h</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="container">
                                <div className="pressure">
                                    <img src={pressure} alt='' id='pressure' />
                                    <h4>Pressure</h4>
                                </div>
                                <div>
                                    <h2>{weatherData.main && weatherData.main.pressure} hPa</h2>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default WeatherFetch;
