import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured/index";
import VenueInfo from './components/VenueInfo' ;
import Highlights from './components/Highlights/index';
import Pricing from './components/Pricing/index';
import Location from './components/Location'
import Footer from './components/header_footer/Footer';

const App = () => {
  return (
    <div className="App"
      style={{
        backgroundColor:"turquoise",
        height:'1500px'
      }}
    >
      <Header />
      <Featured />
      <VenueInfo />
      <Highlights/>
      <Pricing/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
