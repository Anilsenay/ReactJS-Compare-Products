import React, {useState} from 'react'
import Info from './Info'
import Image from './Image'

export default function Card(props) {

    const [state, setState] = useState("compare");
    
    return (
        
        <div className="card" onClick= {

            () => {setState(state === "compare" ? "remove":"compare");
            (state === "compare") ? props.compare(props.specifications):props.remove(props.specifications)}

        }>
            
            <div className={`card_overlay ${state === "remove" ? "compare-item":""}`}><div className="compare">{state}</div></div>

            <Image src={props.image} info={props.specifications.name}/>

            <Info name={props.specifications.name} specifications ={props.specifications.specifications} />

            <span className="price">{props.specifications.price}</span>
        </div>
    )
}
