import React from 'react';
import './App.css';
import Card from './components/Card'

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
  return (
    <div className="App">
      <h1>Compare Computers</h1>
      <div className="cards">
        <Card specifications={computers[0]}/>
        <Card specifications={computers[1]}/>
        <Card specifications={computers[0]}/>
        <Card specifications={computers[1]}/>
      </div>
    </div>
  );
}

export default App;
