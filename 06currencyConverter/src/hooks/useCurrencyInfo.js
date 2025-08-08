import { useEffect,useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}) // this will return a method 
    useEffect(()=> {   // automatically fetch api when component(function) mounted or unmounted
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])  
        console.log(data);
    return data 
}

export default useCurrencyInfo;