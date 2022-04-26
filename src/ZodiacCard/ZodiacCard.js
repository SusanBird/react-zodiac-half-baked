import './ZodiacCard.css';

export default function ZodiacCard({ name, dates }) {
  return (
    <div className='zodiac-card'>
      <p className='zodiac-name'> {name} </p>
      <img className='zodiac-images' src={`./images/${name}.png`}/>
      <p className='zodiac-dates'> {dates} </p>
    </div>
  );
}


//   {/* in this component,  use the `name` and `dates` props to render the name and dates of the sign, 
// as well as load the correct image from the public directory */}
// more comments