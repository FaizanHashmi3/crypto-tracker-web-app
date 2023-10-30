import axios from "axios";


export const getCoinData=(id)=>
{
    const myData= axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response)=>
        {
             return response.data;
    
    
        }).catch((error)=>
            {
  
    // alert("oops! some error occured in the data fetching")
    console.log("error occured: "+error);
    
        })

        return myData;
}