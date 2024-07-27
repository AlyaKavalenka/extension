import { setCity } from '../api/store/citySlice';
import { useAppDispatch, useAppSelector } from '../api/store/hooks';

export default function CitySelector() {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.city.value);

  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <label htmlFor='city'>Select city:</label>
      <select
        name='city'
        id='city'
        defaultValue={city}
        onChange={(e) => {
          dispatch(setCity(e.target.value));
          chrome.storage.local.set({ city: e.target.value });
        }}
      >
        <option value=''>current location</option>
        <option value='Minsk'>Minsk</option>
        <option value='London'>London</option>
        <option value='Paris'>Paris</option>
      </select>
    </section>
  );
}
