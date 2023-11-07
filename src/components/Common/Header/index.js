import React, { useState } from 'react';
import "./styles.css";
import TemporaryDrawer from './drawer';
import { Dashboard } from '@mui/icons-material';
import Button from '../Button';
import { Link } from 'react-router-dom';

import { Switch } from "@mui/material";


function Header({handleChange}) {
  const [flag, setFlag] = useState(true);
  return (
    <div className="navbar">
      <h1 className='logo'>CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>
     
      <div className='links'>
      <Switch 
      defaultChecked
       onChange={()=>{
        setFlag(!flag);
        handleChange(flag)}}
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
          <TemporaryDrawer handleChange={handleChange}/>
      </div>
    </div>
  )
}

export default Header;