import React,{useState,useEffect} from 'react'
import Header from '../Common/Header'
import TabsComponent from '../DashBoard/Tabs'
import axios from 'axios';
import Search from '../DashBoard/Search';
import PaginationComponent from '../DashBoard/Pagination';
import Loader from '../Common/Loader';
import BackToTop from '../Common/BackToTop';

function DashboardPage() {
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
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        ).then((response)=>
        {
            
            setCoins(response.data);
           
            setpaginatedCoins(response.data.slice(0,10));
            setIsLoading(false);
        }).catch((error)=>
        {
          
            // alert("oops! some error occured in the data fetching")
            console.log("error occured: "+error);
            setIsLoading(false);
        })
    },[])
  return (
    <>
     <Header/>
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