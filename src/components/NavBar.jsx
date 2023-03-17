import {Menu, Image} from "semantic-ui-react";
import Marquee from "react-fast-marquee";
import React, { useState, useEffect } from 'react';
import Ticker from "./Ticker"


const Nav = () => {

// api call    
    const [stockData, setStockData] = useState(0);

    useEffect(() => {
        const apiKey = "ebe3699433b327a341b2e8a0d2c8d11d"
        const api = "https://financialmodelingprep.com/api/v3/profile/AAPL,GOOG,MSFT,FB,AMZN,NVDA,TSLA,NFLX?apikey=" + apiKey;
        
        
        fetch(api).then(res => res.json()).then((data) => {
            setStockData(data)
           
           console.log(stockData)
        })
    },[]);

    return (
        <div>
        <Menu secondary>
            <Image src="./images/cashLogo.png" size="small" />

            <Menu.Item position="right">Reset Screen</Menu.Item>
            <Menu.Item >About us</Menu.Item>
            <Menu.Item position="right">Login</Menu.Item>
        </Menu>
        <Marquee>
  {stockData ? stockData.map((item) => {
    return (
    <Ticker item={item}/>
    )
  }): ""}
</Marquee>
        </div>
    );
};


export default Nav;