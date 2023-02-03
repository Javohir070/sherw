import React from 'react';
import MainContext from './context/main';
// import Card from './peges/Card';
// import Home from './peges/Home';
// import Main from './peges/Main';
import Reducer from './Reducer';
function Add(){
    return (
        <MainContext>
          <Reducer />
        </MainContext>
      );
}
export default Add;