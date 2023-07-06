import React from 'react';
import './App.css';
import Header1 from './Header2/HeaderMain';
import Header from './header/Content';
import vid from './Video/pexels-vimeo-857136-1280x720-24fps.mp4';
import Lower from './lower/Lower';
// import Rou from './Rou';
import Home from './Home/Home';
// import { Route } from 'react-router-dom';
// import { Switch } from 'react-router';
// import{
//   // BrowserRouter,
//   Routes,
//   // Route
// } from "react-router-dom"

function App() {
  return (
    <>
    <div>
      <div>
        <Header />
      </div>
     
      <div className='video-container'>
        <video
          src={vid}
          autoPlay
          loop
          muted
          style={{
            // position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div className='content-container'>
          <Header1 />
        </div>
      </div>
      <div>
        <Lower></Lower>
      </div>
      
      </div>
    </>
  );
}

export default App;





