import React, { useState } from 'react';
import {
  ComposedChart,
  Line,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Dot,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import classes from './index.module.scss'

const data = [
    {
      "newMarkersClustered": 10,
      "lineData": 0,
      "scatterData" : null,
    },
    {
      "newMarkersClustered": 20,
      "lineData": 50,
      "scatterData" : 55,
      "newsLabel" : 'خبر شماره 1',
      "newsImg" : '/NewsChart/1.png'
    },
    {
      "newMarkersClustered": 30,
      "lineData": 30,
      "scatterData" : null,
    },
    {
      "newMarkersClustered": 40,
      "lineData": 25,
      "scatterData" : null,
    },
    {
      "newMarkersClustered": 50,
      "lineData": 60,
      "scatterData" : 55,
      "newsLabel" : 'خبر شماره 2',
      "newsImg" : '/NewsChart/2.png'
    },
    {
      "newMarkersClustered": 60,
      "lineData": 65,
      "scatterData" : null,
    },
    {
      "newMarkersClustered": 70,
      "lineData": 70,
      "scatterData" : 65,
      "newsLabel" : 'خبر شماره 3',
      "newsImg" : '/NewsChart/3.png'
    },
    {
      "newMarkersClustered": 80,
      "lineData": 40,
      "scatterData" : null,
    },
    {
      "newMarkersClustered": 90,
      "lineData": 50,
      "scatterData" : 55,
      "newsLabel" : 'خبر شماره 4',
      "newsImg" : '/NewsChart/4.png'
    },
    {
      "newMarkersClustered": 100,
      "lineData": 20,
      "scatterData" : null,
    },
  ];



  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{background:'#fff' , padding:'0.5rem' , borderRadius:'6px' , border:'1px solid #111'}}>
          <p className="label">{`${label} : `}</p>
          {payload[0].payload?.scatterData && 
            <>
                <p className="label"><img alt='' src={payload[0].payload?.newsImg}/></p>
                <p className="label">{`${payload[0].payload.newsLabel ?? ''}`}</p>
            </>
          }
        </div>
      );
    }
    return null;
  };
  
const NewsChart = () => {

    
    const CustomizedShape = (props) => {
        const { cx , cy , fill , payload } = props;
        return (
            <g>
                {payload.scatterData && 
                <>
                    <Dot x={cx} y={cy} stroke="red" class="pulse">
                        <animate
                          attributeName="r"
                          from="8"
                          to="20"
                          dur="1.5s"
                          begin="0s"
                          repeatCount="indefinite"
                        />
                    </Dot>
                    <svg 
                    transform={`translate(${cx - 30},${cy - 20})`} 
                    xmlns="http://www.w3.org/2000/svg">
                            <animate
                                attributeName="r"
                                from="8"
                                to="20"
                                dur="1.5s"
                                begin="0s"
                                repeatCount="indefinite"
                            />
                        <path d="M12.5 33.5H21.5V30.5H12.5ZM12.5 25.5H21.5V22.5H12.5ZM12.5 17.5H21.5V14.5H12.5ZM32.5 33.5H35.5V30.5H32.5ZM32.5 25.5H35.5V14.5H32.5ZM7 42Q5.8 42 4.9 41.1Q4 40.2 4 39V9Q4 7.8 4.9 6.9Q5.8 6 7 6H41Q42.2 6 43.1 6.9Q44 7.8 44 9V39Q44 40.2 43.1 41.1Q42.2 42 41 42ZM7 39H41Q41 39 41 39Q41 39 41 39V9Q41 9 41 9Q41 9 41 9H7Q7 9 7 9Q7 9 7 9V39Q7 39 7 39Q7 39 7 39Z"/>
                    </svg>
                </>
                }
                {/* <g transform={`translate(${cx},${cy})`}>
                <text x={10} y={0} dy={4} textAnchor="left">{payload.newsLabel}</text>
                </g> */}
            </g>
        );
    };

    const [img , setImg] = useState({
        cx : null,
        cy : null,
    })

    return (
      <ResponsiveContainer className="graph-wrapper" width="100%" height="90%" >
        <ComposedChart data={data} >
            <CartesianGrid stroke="#f5f5f5" />
            <Tooltip content={<CustomTooltip/>}/>
          <XAxis dataKey="newMarkersClustered" type="number"/>
          <YAxis type="number"/>
          <Scatter name="scatterData" dataKey="scatterData" fill="red" shape={<CustomizedShape />}  />
          <Line dataKey="lineData" stroke="blue" dot={false}/>
        </ComposedChart>
      </ResponsiveContainer>
    )
  }

export default NewsChart