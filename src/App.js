import "./resources/styles.css";
import {Element} from 'react-scroll';

import Header from "./components/header_footer/Header";
import Featured from "./components/featured/index";
import VenueInfo from './components/VenueInfo' ;
import Highlights from './components/Highlights/index';
import Pricing from './components/Pricing/index';
import Location from './components/Location'
import Footer from './components/header_footer/Footer';

const App = () => {
  return (
    <div className="App"> 
      <Header />

      <Element name="featured">
        <Featured />
      </Element>
  
      <Element name="venueinfo">
        <VenueInfo />
      </Element>
    
      <Element name="highlight">
        <Highlights/>
      </Element>
    
      <Element name="pricing">
        <Pricing/>
      </Element>
    
      <Element name="location">
        <Location/>
      </Element>
  
      <Footer/>
    </div>
  );
}

export default App;
