import { useEffect, useState } from 'react';

export default function WeatherInfo(props: { city: string }) {
  const { city } = props;

  const [weather, setWeather] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`https://wttr.in/${city}?0`);
        const data = await response.text();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setWeather('Unable to fetch weather data.');
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: weather || '' }}
      className='weather-info'
    ></div>
  );
}
