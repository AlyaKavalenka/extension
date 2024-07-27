import CitySelector from './CitySelector';

export default function Popup() {
  return (
    <section>
      <h3
        style={{
          textWrap: 'nowrap',
        }}
      >
        Weather Extension
      </h3>
      <CitySelector />
    </section>
  );
}
