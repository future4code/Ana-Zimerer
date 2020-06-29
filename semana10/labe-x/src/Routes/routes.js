import React from 'react'
import { Switch, Route , BrowserRouter} from 'react-router-dom'

import Home from '../Pages/Home/index.js';
import ListTrips from '../Pages/ListTrips/index.js'
import TripDetails from '../Pages/TripDetails/index.js'
import CreateTrip from '../Pages/Adm_CreateTrip/index.js'
import LoginAdm from '../Pages/Adm_Login/index.js'
import Candidature from '../Pages/Candidature/index.js'

export default function Routes() {   
    return (
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}/> 
              <Route exact path="/trips/list" component={ListTrips}/>   
              <Route exact path="/trips/details:id" component={TripDetails}/>  
              <Route exact path="/login" component={LoginAdm}/>   
              <Route exact path="/trips/create" component={CreateTrip}/>  
              <Route exact path="/trips/candidature:id:name" component={Candidature}/>  
            </Switch>
        </BrowserRouter>
    );
  }
  