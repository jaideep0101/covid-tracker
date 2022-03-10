import React, {useState, useEffect } from "react";
import { Cards, Chart, CountryList } from "./components";
import styles from "./App.module.css";
import {fetchData } from "./api/api";

function App () {
const[data,setData]=useState({});
 
useEffect(()=>{
const data=fetchData();
setData(data)
console.log(data)
},[])

 return (
    <div className={styles.container}>
      <Cards data={data} />
      <Chart />
      <CountryList />
    </div>
  );
 }



export default App;
