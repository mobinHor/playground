import React, { useEffect , useState } from 'react'



const generateArr = (max , min)=>{
    let arr = []
    for (let i = min; i <= max; i++) {
        arr.push(i)
    }
    return arr
}
const fact = (number)=>{
    let numbers = generateArr(number , 1)
    return numbers.reduce(
        (previousValue, currentValue) => previousValue * currentValue,
        1
    );  
}
const calc3 = (n)=>{
    let numbers = generateArr(n , 1)
    return numbers.map((number)=>{
        return (number===1 ? fact(number) : fact(number*2-1)) / (number*2)
    }).reduce(
        (previousValue, currentValue , index) => 
        index%2===0 ? 
        previousValue + currentValue
        :
        previousValue - currentValue,
        0
    );  
    ;  
}
console.log(calc3(3))



const Math = () => {



  return (
    <div>index</div>
  )
}

export default Math