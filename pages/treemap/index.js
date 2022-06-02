import React,{useEffect} from 'react'
import TreeMap from "react-d3-treemap";
import "react-d3-treemap/dist/react.d3.treemap.css";

const TreeMapComponent = () => {

    // https://jquintozamora.github.io/react-d3-treemap/
    
    useEffect(() => {
        const client = new W3CWebSocket(process.env.WS_URL);
        client.onopen = () => {
            setSocket(client)
            client.send(`TreemapVersionnew/TreemapNewVersion?${filters.YVal.length!==0 ? `YVal=${TrimArrayOfSelected(filters.YVal)}` : ''}${filters.Flow.length!==0 ? `&Flow=${TrimArrayOfSelected(filters.Flow)}` : ''}&Size=${filters.Size.id}&Group=${filters.Group.id}`)
            client.onmessage = (message) => {
                setLoad(true)
                let parsed = JSON.parse(message.data)
                try {
                    storeMarketMapData(JSON.parse(parsed))
                } catch (error) {
                    storeMarketMapData([])
                }
                setLoad(false)
            };
        };

        return () => {
            client.close()
        }
        // eslint-disable-next-line
    }, [])

  return (
    <TreeMap
        id="myTreeMap"
        width={500}
        height={400}
        data={[]}
        valueUnit={"MB"}
    />
  )
}

export default TreeMapComponent