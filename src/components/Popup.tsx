import CitySelector from './CitySelector';
import WeatherInfo from './WeatherInfo';

export default function Popup() {
  return (
    <section>
      <h1>Weather Extension</h1>
      <CitySelector />
      <WeatherInfo />
    </section>
  )
}