import React,{useState,useEffect} from 'react'

function TotalIncome({mainIncome, additionalIncome}) {
    const [totalIncome, setTotalIncome] = useState(0)

    useEffect(()=>{
        let sum =0
        // adding up the two income arrays
        let total =[].concat(mainIncome,additionalIncome)
        
        //convert array to numbers
        let  intify = total.map(Number)
        console.log(intify)
        
        // add up the total values
        const sumFunction = (a, b) => a + b;
        intify.forEach(element=>{
         
            sum = sumFunction(sum,element)
        })

        setTotalIncome(sum)
        localStorage.setItem('sum',JSON.stringify(sum))
    },[mainIncome,additionalIncome])


  return (
    <div>
        <h1>Total Income</h1>
        <div> £ {totalIncome}</div>
    </div>
    
  )
}

export default TotalIncome