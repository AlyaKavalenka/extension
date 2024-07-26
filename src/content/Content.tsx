import ReactDOM from 'react-dom';
import WeatherBtn from '../components/weatherBtn/WeatherBtn';
import { createRoot } from 'react-dom/client';

const iconURL = chrome.runtime.getURL('cloudy.png');

const newsHeaderList = document.querySelectorAll('.title');

newsHeaderList.forEach((newsHeader) => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(<WeatherBtn iconUrl={iconURL} />);

  newsHeader.appendChild(container);

  if (newsHeader instanceof HTMLElement) {
    newsHeader.style.display = 'flex';
    newsHeader.style.alignItems = 'flex-end';
  }
});

export {};
