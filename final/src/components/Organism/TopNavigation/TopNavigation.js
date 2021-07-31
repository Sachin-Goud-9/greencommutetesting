import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ProfileItem from '../../molecules/ProfileItem/ProfileItem';
import LocationListItem from '../../molecules/LocationListItem/LocationListItem';
const TopNavigation = (  { locationName} )  => {
  
    return (
      <div >
            <LocationListItem locationName={locationName}/>
            <ProfileItem />
        
     </div>
    );
  }
  
  export default TopNavigation;