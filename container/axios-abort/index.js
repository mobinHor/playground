import React , { useState , useEffect } from 'react'
import MountUnmount from './MountUnmount'

const AxiosAbort = () => {

    const [isMounted , setIsMounted] = useState(false)


    useEffect(()=>{
        setIsMounted(false)
    },[isMounted])

    return (
        <div>
            <button onClick={()=>setIsMounted(true)}>Toggle component</button>
            {isMounted && <MountUnmount />}
        </div>
    )
}

export default AxiosAbort