import React from 'react';
import {Redirect} from  'react-router-dom';


//is logged in function
const IsLoggedIn = () => {
   const store = localStorage

   if(store.getItem('logged_in')){
      return <Redirect to="/user"/>
   }else{ return <Redirect to="/sign-in"/>}

};

export default IsLoggedIn;
