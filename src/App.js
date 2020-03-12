import React, { useState } from 'react';
import './App.css';
import Card from './components/Card'
import CompareTable from './components/CompareTable'

const computers = [
  {
    name: "Abra A5 V15.3 15,6",
    specifications: [
      "Intel Coffee Lake Core i5-9300H",
      "3GB GDDR5 Nvidia GTX1050",
      '15,6" FHD 1920x1080 IPS Mat LED Ekran',
      "8GB (1x8GB) DDR4 2666MHz",
      "240GB M.2 SSD Sata 3",
      "FreeDos (İşletim sistemi bulunmamaktadır)"
    ],
    price: "4.899 TL",
  },
  {    
    name: "Abra A5 V15.3.1 15,6",
    specifications: [
    "Intel Coffee Lake Core i5-9300H",
    "3GB GDDR5 Nvidia GTX1050",
    '15,6" FHD 1920x1080 IPS Mat LED Ekran',
    "8GB (1x8GB) DDR4 2666MHz",
    "240GB M.2 SSD Sata 3",
    "FreeDos (İşletim sistemi bulunmamaktadır)"
    ],
    price: "4.899 TL"
  }
]



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
        <Card specifications={computers[0]} compare={setCompareState} remove={removeFromArray}/>
        <Card specifications={computers[1]} compare={setCompareState} remove={removeFromArray}/>
        <Card specifications={computers[0]} compare={setCompareState} remove={removeFromArray}/>
        <Card specifications={computers[1]} compare={setCompareState} remove={removeFromArray}/>
      </div>
      <CompareTable compareItems={compareArray}/>
    </div>
  );
}

export default App;
