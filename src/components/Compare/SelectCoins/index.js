import React,{useEffect, useState} from 'react';
import './styles.css';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { get100Coins } from '../../functions/get100Coins';

function SelectCoins({crypto1,crypto2,handleCoinChange}) {
    
    const [allCoins, setAllCoins] = useState([])
    const styles=
        {
            height:"2.5rem",
            color:"var(--white)",
            width:"auto",
            "& .MuiOutlinedInput-notchedOutline":
            {
                borderColor:"var(--white)",
    
            },
            "& .MuiSvgIcon-root":{
                color:"var(--white)",
            },
            "&:hover":
            {
                "&& fieldset":
                {
                    borderColor:"#3a80e9",
                },
            },
        }
       

        useEffect(()=>{
            getData();
        },[]);


        async function getData()
        {
            const myCoins=await get100Coins();
            setAllCoins(myCoins);
        }


  return (
    <div className='coins-flex'>
        <p className="coin-names">Crypto 1</p>
        <FormControl>
       <InputLabel id="demo-simple-select-label">Crypto 1</InputLabel>
        <Select
            sx={styles}
           value={crypto1}
          label="Crypto 1"
          onChange={(event)=>handleCoinChange(event,false)}
    >
        
    {allCoins.filter((item)=> item.id != crypto2).map((coin,i)=>(
        <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
    ))}
    </Select>
    </FormControl>
        <p className="coin-names">Crypto 2</p>

        <FormControl>
       <InputLabel id="demo-simple-select-label">Crypto 2</InputLabel>
        <Select
            sx={styles}
           value={crypto2}
          label="Crypto 2"
          onChange={(event)=>handleCoinChange(event,true)}
    >
        
    {allCoins.filter((item=> item.id != crypto1)).map((coin)=>(
        <MenuItem value={coin.id}>{coin.name}</MenuItem>
    ))}
    </Select>
    </FormControl>
    </div>
  );
}

export default SelectCoins;