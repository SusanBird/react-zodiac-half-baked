import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';

export default function Main({ zodiacs }) {
  // console.log(zodiacs);
  return (
    <main className='zodiac-cards' style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        zodiacs.map((ZodiacCardEl) =>
          <ZodiacCard
            key={ZodiacCardEl.name}
            name={ZodiacCardEl.name}
            dates={ZodiacCardEl.dates}/>
        )
      }
    </main>
  );
}


{/* import the ZodiacCard component */}
{/* get the zodiac array from props */}
{/* for each item in the `zodiacs` array props, render a ZodiacCard component, passing in the name and the dates as props to the ZodiacCard component */}
{/* remember that when you map over an array and render out a list, each item in the list needs a unique 'key' prop */}