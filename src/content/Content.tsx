import WeatherBtn from '../components/weatherBtn/WeatherBtn';
import { createRoot } from 'react-dom/client';

chrome.storage.local.get(['city']).then((result) => {
  const iconURL = chrome.runtime.getURL('cloudy.png');
  const newsHeaderList = document.querySelectorAll('.title');

  newsHeaderList.forEach((newsHeader) => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<WeatherBtn iconUrl={iconURL} city={result.city} />);

    newsHeader.appendChild(container);

    if (newsHeader instanceof HTMLElement) {
      newsHeader.style.display = 'flex';
      newsHeader.style.alignItems = 'flex-end';
    }
  });
});

export {};
