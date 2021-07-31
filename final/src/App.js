import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink,
  HashRouter
} from "react-router-dom";
import MyTypography from './components/atoms/MyTypography/MyTypography';
import Typography from '@material-ui/core/Typography';
import DescriptionCard from './components/molecules/DescriptionCard/DescriptionCard';
import TravelInfoCard from './components/molecules/TravelInfoCard/TravelInfoCard';
const App = () => {
  return (
    <HashRouter>
    <div>
    <DescriptionCard 
     head= "Description"
    body = "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide."
    ></DescriptionCard>
    <TravelInfoCard
     mapImageSrc = 'images/map.png'
    srcLocation = "Marredpally"
    destLocation = "Hitech City"
    ></TravelInfoCard>
    
  </div> 
  </HashRouter> 
  
   
 
  );
};

export default App;