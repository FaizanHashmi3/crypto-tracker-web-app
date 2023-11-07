import './App.css';

import { BrowserRouter,Routes,Route}from 'react-router-dom';
import {useState} from "react";

import HomePage from './components/Pages/Home';
import DashboardPage from './components/Pages/DashboardPage';
import CoinPage from './components/Pages/Coin';
import ComparePage from './components/Pages/ComparePage';


function App() {
 const [theme,setTheme]= useState('dark');

 function handleChange(flag)
 {
  if(flag)
  {
    setTheme('light');
  }
  else
  {
    setTheme('dark');
  }
  
 }
  
  return (
    <div  className='App' data-theme= {theme} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage  handleChange={handleChange}/>}/>
          <Route path='/dashboard' element={<DashboardPage handleChange={handleChange}/>}/>
          <Route path='/coin/:id' element={<CoinPage handleChange={handleChange}/>}/>
          <Route path='/compare' element={<ComparePage handleChange={handleChange}/>}/>
         
        </Routes>
      </BrowserRouter>
      
   
 
    </div>
   
  );
}

export default App;
