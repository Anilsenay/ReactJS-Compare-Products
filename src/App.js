import React, { useState } from 'react';
import './App.css';
import Card from './components/Card'
import CompareTable from './components/CompareTable'
import image from './img/img.png'
import image2 from './img/img2.png'
import image3 from './img/img3.png'


const computers = [
  {
    id: 0,
    name: 'Abra A5 V15.3 15,6"',
    specifications: [
      "Intel Coffee Lake Core i5-9300H",
      "3GB GDDR5 Nvidia GTX1050",
      '15,6" FHD 1920x1080 IPS Mat LED Ekran',
      "8GB (1x8GB) DDR4 2666MHz",
      "240GB M.2 SSD Sata 3",
      "FreeDos"
    ],
    price: "4.899,00 TL",
    detailedSpecs: {
      CPU: "Intel® Coffee Lake Core™ i5-9300H 4C/8T; 8MB L3; 8GT/s; 2.4GHz > 4.1GHz; 45W; 14nm",
      GPU: "3GB GDDR5 nVIDIA® GeForce® GTX1050 DX12 (2019 Version)",
      Screen: '15,6" FHD 1920x1080 IPS Mat LED',
      RAM: "8GB (1x8GB) DDR4L 1.2V 2666MHz SODIMM",
      Storage: "240GB M.2 SSD Sata 3 (Read: 550 MB/s - Write: 510 MB/s)",
      OS: "FreeDos",
      Sizes: "359.8 (W) x 244.3 (D) x 29.05 (H) mm (with rubber foot)",
      Weight: "2.1Kg (46.74WH battery included)"
    }
  },
  {    
    id: 1,
    name: 'Abra A5 V15.3.1 15,6"',
    specifications: [
    "Intel Coffee Lake Core i5-9300H",
    "3GB GDDR5 Nvidia GTX1050",
    '15,6" FHD 1920x1080 IPS Mat LED Ekran',
    "8GB (1x8GB) DDR4 2666MHz",
    "500GB M.2 SSD",
    "FreeDos"
    ],
    price: "5.199,00 TL",
    detailedSpecs: {
      CPU: "Intel® Coffee Lake Core™ i5-9300H 4C/8T; 8MB L3; 8GT/s; 2.4GHz > 4.1GHz; 45W; 14nm",
      GPU: "3GB GDDR5 nVIDIA® GeForce® GTX1050 DX12 (2019 Version)",
      Screen: '15,6" FHD 1920x1080 IPS Mat LED',
      RAM: "8GB (1x8GB) DDR4L 1.2V 2666MHz SODIMM",
      Storage: "500GB M.2 SSD PCIe 3.0 x4 (Read: 1700 MB/s - Write: 950 MB/s)",
      OS: "FreeDos",
      Sizes: "359.8 (W) x 244.3 (D) x 29.05 (H) mm (with rubber foot)",
      Weight: "2.1Kg (46.74WH battery included)"
    }
  },
  {    
    id: 2,
    name: 'Abra A7 V11.1.2 17,3"',
    specifications: [
    "Intel Coffee Lake Core i7-9750H",
    "4GB GDDR5 Nvidia GTX1650 128-Bit",
    '17,3" FHD 1920x1080 Mat LED Ekran',
    "8GB (1x8GB) DDR4 2666MHz",
    "250GB OCZ RC500 M.2 SSD",
    "Windows 10 Home SL"
    ],
    price: "7.099,00 TL",
    detailedSpecs: {
      CPU: "Intel® Coffee Lake Core™ i7-9750H 6C/12T; 12MB L3; 8GT/s; 2.6GHz > 4.5GHz; 45W; 14nm",
      GPU: "4GB GDDR5 nVIDIA® GeForce® GTX1650 128-Bit DX12",
      Screen: '17,3" FHD 1920x1080 Mat LED Ekran',
      RAM: "8GB (1x8GB) DDR4L 1.2V 2666MHz SODIMM",
      Storage: "250GB OCZ RC500 M.2 SSD PCIe 3.0 x4 (Read: 1700 MB/s - Write: 1200 MB/s)",
      OS: "Windows 10 Home SL License 64-Bit",
      Sizes: "395.7 (W) x 260.8 (D) x 30.05 (H) mm (with rubber foot)",
      Weight: "2.5Kg (46.74WH battery included)"
    }
  },
  {    
    id: 3,
    name: 'Abra A5 V15.2.2 15,6"',
    specifications: [
    "Intel Coffee Lake Core i7-9750H",
    "4GB GDDR5 Nvidia GTX1650 128-Bit",
    '15,6" FHD 1920x1080 IPS Mat LED Ekran',
    "8GB (1x8GB) DDR4 2666MHz",
    "250GB OCZ RC500 M.2 SSD",
    "Windows 10 Home SL"
    ],
    price: "6.399,00 TL",
    detailedSpecs: {
      CPU: "Intel® Coffee Lake Core™ i7-9750H 6C/12T; 12MB L3; 8GT/s; 2.6GHz > 4.5GHz; 45W; 14nm",
      GPU: "4GB GDDR5 nVIDIA® GeForce® GTX1650 128-Bit DX12",
      Screen: '15,6" FHD 1920x1080 IPS Mat LED Ekran',
      RAM: "8GB (1x8GB) DDR4L 1.2V 2666MHz SODIMM",
      Storage: "250GB OCZ RC500 M.2 SSD PCIe 3.0 x4 (Read: 1700 MB/s - Write: 1200 MB/s)",
      OS: "Windows 10 Home SL License 64-Bit",
      Sizes: "359.8 (W) x 244.3 (D) x 29.05 (H) mm (with rubber foot)",
      Weight: "2.1Kg (46.74WH battery included)"
    }
  },
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
