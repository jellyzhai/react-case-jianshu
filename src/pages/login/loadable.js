import React from 'react';
import Loadable from 'react-loadable';

const LoadbaleComponent = Loadable({
  loader(){
    return import('./');
  },
  loading({error, pastDelay}){
    if(error){
      console.log(`error: ${error}`);
      return <div>Error!</div>
    }else if(pastDelay) {
      console.log(`pastDelay: ${pastDelay}`);
      return <div>loading...</div>
    }
    else{
      return null
    }
  }
});

export default () => <LoadbaleComponent/>;