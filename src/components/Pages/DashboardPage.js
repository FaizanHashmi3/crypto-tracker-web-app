import React,{useState,useEffect} from 'react'
import Header from '../Common/Header'
import TabsComponent from '../DashBoard/Tabs'
import axios from 'axios';
import Search from '../DashBoard/Search';
import PaginationComponent from '../DashBoard/Pagination';
import Loader from '../Common/Loader';
import BackToTop from '../Common/BackToTop';
import { get100Coins } from '../functions/get100Coins';

function DashboardPage({handleChange}) {
    const [search, setSearch] = useState("");
    const [paginatedCoins,setpaginatedCoins]=useState([]);
    const [coins,setCoins]=useState([]);
    const [page, setPage] = useState(1);
    const [isLoading,setIsLoading]=useState(true);
  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex=(value-1)*10;
    setpaginatedCoins(coins.slice(previousIndex,previousIndex+10));
  };

    function onSearchChange(e)
    {
        setSearch(e.target.value);
    }
    var filteredCoins=coins.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()));

    useEffect(()=>{ 
        getData();
    },[])


    const getData = async()=>
    {
      const myCoins=await get100Coins();
      if(myCoins)
      {
        setCoins(myCoins);
        setpaginatedCoins(myCoins.slice(0,10));
        setIsLoading(false)
      }
     
    }
  return (
    <>
     <Header handleChange={handleChange}/>
     <BackToTop/>
    {isLoading ? (
    <Loader/> 
    ) : ( 
      <div>
         
          <Search search={search} onSearchChange={onSearchChange}/>
          <TabsComponent coins={search?filteredCoins:paginatedCoins}/>
          {!search && ( <PaginationComponent page={page} handlePageChange={handlePageChange}/>)} 
      </div>)}
      
     
 
   
    </>
  )
}

export default DashboardPage