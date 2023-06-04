import React,{useEffect} from 'react'
import axios from "axios";

const MountUnmount = () => {
    const abortController = new AbortController()

    const fetchData = () => {

        axios.get('https://jsonplaceholder.typicode.com/posts', {
            signal: abortController.signal
        })
        .then(function(response) {})
        .catch( error => {
            console.log(error)
        })
    }

    useEffect(()=>{
        
        fetchData()
        return () => {
            abortController.abort();
        };
    },[])

  return (
    <div>
        <button onClick={fetchData}>get data</button>
    </div>
  )
}

export default MountUnmount