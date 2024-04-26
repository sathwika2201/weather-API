import React from 'react';
import { LineChart, WindRoseChart, BarChart } from 'reagraph';

const WeatherGraph = ({ weatherData }) => {
  // Extract relevant data (timestamps, temperature, wind speed, pressure, humidity)
  const timestamps = weatherData.map((entry) => entry.timestamp);
  const temperatures = weatherData.map((entry) => entry.temperature);
  const windSpeeds = weatherData.map((entry) => entry.windSpeed);
  const pressures = weatherData.map((entry) => entry.pressure);
  const humidities = weatherData.map((entry) => entry.humidity);

  // Create your advanced chart using ReaGraph components
  return (
    <div>
      <LineChart data={temperatures} xLabels={timestamps} title="Temperature" />
      <WindRoseChart data={windSpeeds} title="Wind Speed Distribution" />
      <BarChart data={pressures} xLabels={timestamps} title="Pressure" />
      <BarChart data={humidities} xLabels={timestamps} title="Humidity" />
    </div>
  );
};

export default WeatherGraph;
