import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { createTheme,ThemeProvider} from '@mui/material';
import Grid from '../Grid';
import "./styles.css"
import List from '../List';

export default function TabsContext({coins}) {
  // {console.log("coin is: "+coins)}
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let style=
  {
    color:"var(--white)",
    fontSize:"1.2rem",
    fontWeight:600,
    fontFamily:"Inter",
    textTransform:"capitalize"
  }
  let theme=createTheme({
    palette:{
        primary:{
            main:"#3a80e9",
        },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
       
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style}/>
            
          </TabList>
        
        <TabPanel value="grid">
            <div className='grid-flex'>
                {coins.map((coin,i)=>
                {
                    return <Grid coin={coin} key={i}/>
                })}
            </div>
        </TabPanel>
        <TabPanel value="list">
       <table className='list-table'>
   
        {coins.map((item,i)=>
        {
      
          return <List coin={item} key={i} />
        })}
       </table> 
        </TabPanel>
        
      </TabContext>
    </ThemeProvider>
  );
}