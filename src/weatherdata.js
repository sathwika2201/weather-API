// import React, { useState, useEffect } from 'react';
import './weatherdata.css';

// const WeatherData = () => {
//   const [city, setCity] = useState('Tokyo'); // Set Tokyo as the default city
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState('');

//   const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
//   const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
//   const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

//   // Function to save weather data
//   const saveWeatherData = async () => {
//     try {
//       const response = await fetch('/api/weather', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ city, weatherData }),
//       });
//       if (response.ok) {
//         console.log('Weather data saved successfully');
//       } else {
//         throw new Error('Failed to save weather data');
//       }
//     } catch (error) {
//       console.error('Error saving weather data:', error);
//     }
//   };

//   // Fetch weather data when the component mounts and when the city changes
//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         const currentWeatherResponse = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
//         const currentWeatherData = await currentWeatherResponse.json();

//         const forecastResponse = await fetch(`${forecastUrl}?q=${city}&appid=${apiKey}&units=metric`);
//         const forecastData = await forecastResponse.json();

//         setWeatherData({ current: currentWeatherData, forecast: forecastData });
//         setError('');
//       } catch (error) {
//         setError('Error fetching weather data');
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     fetchWeatherData();
//   }, [city]); // Update when the city changes

//   // Save weather data when available
//   useEffect(() => {
//     if (weatherData) {
//       saveWeatherData();
//     }
//   }, [weatherData]);

//   return (
//     <div className="container">
//       <h1>Dashboard</h1>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button>Search</button>
//       </div>
//       {error && <p className="error-message">{error}</p>}
//       {weatherData && (
//         <div className="weather-info">
//           {/* Render weather data */}
//           <h2>{weatherData.current.name}</h2>
//           <p>Temperature: {Math.round(weatherData.current.main.temp)}°C</p>
//           <p>Description: {weatherData.current.weather[0].description}</p>
//           <p>Pressure: {weatherData.current.main.pressure}</p>
//           <p>Humidity: {weatherData.current.main.humidity}%</p>
//           {/* Render hourly data */}
//           <div className="hourly-data">
//             <p>Hourly Data:</p>
//             <ul>
//               {weatherData.forecast.list.slice(0, 5).map((forecast, index) => (
//                 <li key={index}>
//                   {new Date(forecast.dt * 1000).toLocaleTimeString()}: {Math.round(forecast.main.temp)}°C
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* Render daily data */}
//           <div className="daily-data">
//             <p>Daily Data:</p>
//             <ul>
//               <li>Tomorrow: {Math.round(weatherData.forecast.daily[0].temp.day)}°C</li>
//               <li>Day After Tomorrow: {Math.round(weatherData.forecast.daily[1].temp.day)}°C</li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherData;

//code1

// import React, { useState } from 'react';
// import './WeatherFetch.css';
// import temp from './images/temp.png';
// import humid from './images/humid.png';
// import wind from './images/wind.png';
// import pressure from './images/pressure.png';

// function WeatherFetch() {
//     const [name, setName] = useState('');
//     const [weatherData, setWeatherData] = useState(null);
//     const [error, setError] = useState(null);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
//         const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

//         const url = `${apiUrl}?q=${name}&appid=${apiKey}&units=metric`;

//         try {
//             const response = await fetch(url);
//             const data = await response.json();

//             if (response.ok) {
//                 setWeatherData(data);
//                 setError(null);
//             } else {
//                 setError('Enter a valid city name');
//             }
//         } catch (error) {
//             console.error('Error fetching weather data:', error);
//             setError('Error fetching weather data');
//         }
//     };

//     return (
//         <div className='weather'>
//             <form className="weatherinput" onSubmit={handleSubmit}>
//                 <label htmlFor="cityInput">Enter City Name:</label><br /><br />
//                 <input 
//                     type='text' 
//                     id="cityInput"
//                     placeholder='Enter city Name' 
//                     value={name}
//                     onChange={(e) => setName(e.target.value)} 
//                     name='city' 
//                 /> 
//                 <button className='weatherbutton' type='submit'>Submit</button>
//             </form>
//             <div className="showdata">
//                 {error && <div className="error">{error}</div>}
//                 {weatherData && weatherData.main && (
//                     <>
//                         <div className="card">
//                             <div className="container">
//                                 <div className="temp">
//                                     <img src={temp} alt='' id='temp' />
//                                     <h4>Temperature</h4>
//                                 </div>
//                                 <div>
//                                     <h2>{weatherData.main?.temp}°C</h2> {/* Use optional chaining here */}
//                                 </div>
//                             </div>
//                         </div>
//                         {/* Similarly handle other properties */}
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default WeatherFetch;




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
        const apiKey = '327b3b38104a194f089f3659688cc98c'; // Replace 'YOUR_API_KEY' with your actual API key
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
                <input type='text' placeholder='Enter city Name' value={name} onChange={(e) => { setName(e.target.value) }} name='city' /> <br /> <br /><br />
                <button className='weatherbutton' type='button' onClick={handleSubmit}>Submit</button>
            </div>
            <div className="showdata">
                {weatherData && weatherData.main && (
                    <>
                        <div className="card">
                            <div className="container">
                                <div className="temp">
                                    <img src={temp} alt='Temperature' />
                                    <h4>Temperature</h4>
                                </div>
                                <div>
                                    <h2>{weatherData.main.temp}°C</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="container">
                                <div className='humid'>
                                    <img src={humid} alt='Humidity' />
                                    <h4>Humidity</h4>
                                </div>
                                <div>
                                    <h2>{weatherData.main.humidity}%</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="container">
                                <div className="wind">
                                    <img src={wind} alt='Wind' />
                                    <h4>Wind</h4>
                                </div>
                                <div>
                                    <h2>{weatherData.wind.speed} km/h</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="container">
                                <div className="pressure">
                                    <img src={pressure} alt='Pressure' />
                                    <h4>Pressure</h4>
                                </div>
                                <div>
                                    <h2>{weatherData.main.pressure} hPa</h2>
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

