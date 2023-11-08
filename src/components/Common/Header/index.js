import React, { useEffect, useState } from 'react';
import "./styles.css";
import TemporaryDrawer from './drawer';
import { Dashboard } from '@mui/icons-material';
import Button from '../Button';
import { Link } from 'react-router-dom';

import { Switch } from "@mui/material";


function Header() {
  

  const [darkTheme, setDarkTheme] = useState(true);

  const setDark = () => {
    document.querySelector(".App").setAttribute("data-theme","dark");
    if (window.innerWidth <=800)
    {
     document.querySelector(".drawer-div").style.backgroundColor="#111"
    }
  };

  const setLight = () => {
    document.querySelector(".App").setAttribute("data-theme","light");
    if (window.innerWidth <=800)
    {
      document.querySelector(".drawer-div").style.backgroundColor="#fff"
    }

  };
  

  const toggleTheme = (e) => {
    if (!darkTheme) {
      setDark();
    } 
    else {
      setLight();
    }
    setDarkTheme(!darkTheme);
  };




  return (
    <div className="navbar">
      <h1 className='logo'>CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>
     
      <div className='links'>
      <Switch 
      defaultChecked
       onChange={()=>toggleTheme()}
      />

        <Link to="/">
          <p className='link'>Home</p>
        </Link>
        <Link to="/compare">
          <p className='link'>Compare</p>
        </Link>
       
        <Link to="/dashboard">
          <Button text={"Dashboard"}  outlined={false}/>
        </Link>
      </div>
      <div className="mobile-drawer">
          <TemporaryDrawer  toggleTheme={toggleTheme} />
      </div>
    </div>
  )
}

export default Header;