import React from 'react'
import dynamic from 'next/dynamic'
const NewsChart = dynamic(() => import('./_components/NewsChart') , {ssr : false})

const index = () => {
  return (
    <div style={{height:'100vh' , width:'100vw'}}>
        <NewsChart />
    </div>
  )
}

export default index