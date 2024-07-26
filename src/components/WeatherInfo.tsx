import { useEffect, useState } from 'react';
import { useAppSelector } from '../api/store/hooks';

export default function WeatherInfo() {
  const city = useAppSelector((state) => state.city.value);

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

  console.log(weather);

  return <div dangerouslySetInnerHTML={{ __html: weather || '' }}></div>;
}
