import { useAppSelector } from '../api/store/hooks'

export default function WeatherInfo() {
  const city = useAppSelector((state) => state.city.value);

  return (
    <h1>{city}</h1>
  )
}