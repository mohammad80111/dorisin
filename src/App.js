import logo from './logo.svg';
import './App.css';
import Home from './componenet/Home/Home';
import Navs from './componenet/Nav/Nav'
import { Fragment } from 'react';
import Service from './componenet/Home/Service/Service';
import Pricing from './componenet/Home/Pricing/Pricing';



function App() {
  return (
  <Fragment>
    
       <Navs/>
       <Home/>
       <Service/>
       <Pricing/>

  </Fragment>
    
   
   
   
  
  );
}

export default App;
