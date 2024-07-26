import { setCity } from '../api/store/citySlice';
import { useAppDispatch } from '../api/store/hooks';

export default function CitySelector() {
  const dispatch = useAppDispatch();

  return (
    <select
      name='city'
      id='city'
      onChange={(e) => {
        dispatch(setCity(e.target.value));
      }}
    >
      <option value=''>current location</option>
      <option value='Minsk'>Minsk</option>
      <option value='London'>London</option>
      <option value='Paris'>Paris</option>
    </select>
  );
}
