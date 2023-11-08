import './App.css';

import { BrowserRouter,Routes,Route}from 'react-router-dom';


import HomePage from './components/Pages/Home';
import DashboardPage from './components/Pages/DashboardPage';
import CoinPage from './components/Pages/Coin';
import ComparePage from './components/Pages/ComparePage';


function App() {

  
  return (
    <div  className='App' data-theme= 'dark' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/dashboard' element={<DashboardPage />}/>
          <Route path='/coin/:id' element={<CoinPage />}/>
          <Route path='/compare' element={<ComparePage />}/>
         
        </Routes>
      </BrowserRouter>
      
   
 
    </div>
   
  );
}

export default App;
