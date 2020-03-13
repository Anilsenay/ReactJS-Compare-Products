import React, { useState } from 'react';
import './App.css';
import Card from './components/Card'
import CompareTable from './components/CompareTable'
import image from './img/img.png'
import image2 from './img/img2.png'
import image3 from './img/img3.png'
import data from "./data";

const computers = data;

function App() {

  const [compareArray, setCompareArray] = useState([])

  let setCompareState = (computer) => {

    for(let i = 0; i < compareArray.length; i++){
      if(computer.name === compareArray[i].name)
        return null;
    }
    let newArray = [...compareArray, computer]
    setCompareArray(newArray)

  }

  let removeFromArray = (computer) => {

    let newArray = [...compareArray]

    for(let i = 0; i < compareArray.length; i++){
      if(computer.name === compareArray[i].name)
        newArray.splice(i, 1)
    }

    setCompareArray(newArray)

  }

  return (
    <div className="App">
      <h1>Compare Computers</h1>
      <div className="cards">
        <Card specifications={computers[0]} image={image} compare={setCompareState} remove={removeFromArray}/>
        <Card specifications={computers[1]} image={image} compare={setCompareState} remove={removeFromArray}/>
        <Card specifications={computers[2]} image={image2} compare={setCompareState} remove={removeFromArray}/>
        <Card specifications={computers[3]} image={image3} compare={setCompareState} remove={removeFromArray}/>
      </div>
      <CompareTable compareItems={compareArray}/>
    </div>
  );
}

export default App;
