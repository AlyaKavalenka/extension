import './WeatherBtn.css';

export default function WeatherBtn(props: { iconUrl: string }) {
  const { iconUrl } = props;

  return (
    <button
      className='weather-btn'
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <img src={iconUrl} alt='weather button' />
    </button>
  );
}
