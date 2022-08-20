// @ts-nocheck
import React,{useEffect , useState , useRef} from 'react'
import axios from 'axios'
import data from '../../container/tree-map/data'
import * as d3 from 'd3';



const TreeMapComponent = ({width=1500 , height=1000}) => {


    const [realData , setRealData] = useState([])

    const fontSize = 12;

    const svgRef = useRef(null);
    
    function renderTreemap() {
        const svg = d3.select(svgRef.current);
        svg.attr('width', width).attr('height', height).attr('style' , 'padding-top : 100px;overflow:visible');
        svg.attr('id' , 'treeMap')

        
        const root = d3
          .hierarchy({name : 'root' , children : realData})
          .sum((d) => d.Arzesh)
          .sort((a, b) => b.data.Arzesh - a.data.Arzesh);
        const treemapRoot = d3.treemap().size([width, height]).padding(5)(root);

        svg
        .append("text")
        .attr("x", 0)
        .attr("y", '-14px')    // +20 to adjust position (lower)
        .text("نقشه بازار")
        .attr("font-size", "19px")
        .attr("fill",  "grey" )
        svg
          .selectAll("titles")
          .data(root.descendants().filter(function(d){return d.depth==1}))
          .enter()
          .append("text")
          .attr("x", function(d){ return d.x0})
          .attr("y", function(d){ return d.y0+21})
          .text(function(d){ return 'parent' })
          .attr("font-size", "19px")
          .attr("fill",  'white' )
  
        const nodes = svg
        .selectAll('g')
        .data(treemapRoot.leaves())
        .join('g')
        .attr('transform', (d) => `translate(${d.x0},${d.y0})`);
  
        nodes
          .append('rect')
          .attr('width', (d) => d.x1 - d.x0)
          .attr('height', (d) => d.y1 - d.y0)
          .attr('fill', (d) => d.data.Bazdeh > 0 ? 'green' : 'red');
        nodes
          .append('text')
          .text((d) => `${d.data.Namad}`)
          .attr('font-size', `${fontSize}px`)
          .attr('x', 3)
          .attr('y', fontSize);
    }

    useEffect(() => {
      if(realData){
        renderTreemap();
      }
      return ()=> d3.select("#treeMap").remove();
    }, [realData]);


        
    const [filters , setFilters] = useState({
        YVal : [{id : 1 , name : 'در سهام'},{id : 2 , name : 'حق تقدم سهام'}],
        Flow : [{id : 1 , name : 'بورس'},{id : 2 , name : 'فرابورس'},{id : 4 , name : 'پایه'}],
        Size : {id : 1 , name : 'ارزش معاملات'},
        Group : {id : 1 , name : 'صنایع'},
        YMARNSC : 'No'
    })


    const TrimArrayOfSelected = (arr)=>{
        return arr.map(a=>a.id).join(',')
    }

    
    useEffect(() => {
        initData()
        // eslint-disable-next-line
    }, [])

    const initData = async ()=>{
      axios.get(`http://web.noandishanafzar.com/api/TreemapVersionnew/TreemapNewVersion?${filters.YVal.length!==0 ? `YVal=${TrimArrayOfSelected(filters.YVal)}` : ''}${filters.Flow.length!==0 ? `&Flow=${TrimArrayOfSelected(filters.Flow)}` : ''}&Size=${filters.Size.id}&Group=${filters.Group.id}`)
      .then(res => {
        console.log(res.data)
        setRealData(res.data)
      })
    }

  return (
    <div>
      <svg ref={svgRef} />
    </div>
  )
}

export default TreeMapComponent