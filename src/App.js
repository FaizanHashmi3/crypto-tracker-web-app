
import './App.css';
import { BrowserRouter,Routes,Route,Link}from 'react-router-dom';

import Footer from './components/Common/Footer';
import Header from './components/Common/Header';
import MainComponent from './components/LandingPage/MainComponent';
import HomePage from './components/Pages/Home';
import DashboardPage from './components/Pages/DashboardPage';
import CoinPage from './components/Pages/Coin';
import ComparePage from './components/Pages/ComparePage';
// import WatchListPage from './components/Pages/WatchListPage';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/dashboard' element={<DashboardPage/>}/>
          <Route path='/coin/:id' element={<CoinPage/>}/>
          <Route path='/compare' element={<ComparePage/>}/>
          {/* <Route path='/watchList' element={<WatchListPage/>}/> */}
         
        </Routes>
      </BrowserRouter>
      
   
 
    </div>
   
  );
}

export default App;
