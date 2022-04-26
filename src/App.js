import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import { zodiacs } from './data.js';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <Header MyName='Susan' />
      <Main zodiacs={zodiacs} />
      <Footer year="2022" />
    </div>
  );
}

export default App;


{/* import and use the Header. Main, and Footer components here */}
{/* the Header component needs a string passed in as the `name` prop */}
{/* the Footer component needs a year passed in as the `year` prop */}
{/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}