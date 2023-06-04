import React from 'react'
import dynamic from 'next/dynamic'
const CandleChart = dynamic(() => import('./_components/CandleChart') , {ssr : false})


const ApexContainenr = () => {
  return (
    <div style={{width:'100%'}}>
        <CandleChart />
    </div>
  )
}

export default ApexContainenr