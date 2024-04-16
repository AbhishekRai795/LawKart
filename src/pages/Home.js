import React from 'react';
import Forclients from '../Components/Forclients.js';
import Navbar from '../Components/Navbar.js';
import Introduction from '../Components/Introduction.js';

export default function Home() {
  return (
    <>

        <Navbar su ="Log-in" lo="Sign-up" />
        <Introduction/>
        <Forclients/>
      
      
    </>
  );
}
