import React, { useState } from 'react'
import './styles.css'

function CoinInfo({heading,desc}) {
    const shortDesc = desc.slice(0,350)+"<span style='color:var(--grey)'> Read more... </span>";
    const longDesc = desc + "<span style='color:var(--grey)'> Read less... </span>";
    const [flag,setFlag]=useState(true)
  return (
    <div className='grey-wrapper'>
        <h2 className='coin-info-heading'>{heading}</h2>
        {desc.length<350?
        (<p className='coin-info-desc'
             dangerouslySetInnerHTML={{__html:desc}}/>
        ):
        (
            <p 
            onClick={()=>setFlag(!flag)}
             className='coin-info-desc'
             dangerouslySetInnerHTML={{__html:flag?shortDesc:longDesc}}
             />
        )}
       
    </div>
  )
}

export default CoinInfo