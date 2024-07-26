import { Provider } from 'react-redux';
import WeatherInfo from '../WeatherInfo';
import './WeatherBtn.css';
import { store } from '../../api/store/store';
import { useState } from 'react';

export default function WeatherBtn(props: { iconUrl: string }) {
  const { iconUrl } = props;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Provider store={store}>
      <section className='weather-section'>
        <button
          className='weather-btn'
          onClick={(e) => {
            e.preventDefault();
            setIsClicked(!isClicked);
          }}
        >
          <img src={iconUrl} alt='weather button' />
        </button>
        {isClicked && <WeatherInfo />}
      </section>
    </Provider>
  );
}
