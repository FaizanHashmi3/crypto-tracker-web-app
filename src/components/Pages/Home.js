import React from 'react'
import Header from '../Common/Header'
import MainComponent from '../LandingPage/MainComponent'

function HomePage({handleChange}) {
  return (
    <div >
          
          <Header handleChange={handleChange}/>
           <MainComponent/>
          
        
        
    </div>
  )
}

export default HomePage