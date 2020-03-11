import React, {useState} from 'react'
import image from '../img/img.png'
import Info from './Info'
import Image from './Image'

export default function Card(props) {

    const [state, setState] = useState("compare");

    return (
        <div className="card" onClick={() => {setState(state === "compare" ? "remove":"compare")}}>
            
            <div class={`card_overlay ${state === "remove" ? "compare-item":""}`}><div class="compare">{state}</div></div>

            <Image src={image} info={props.specifications.name} test="../img/img.png"/>

            <Info name={props.specifications.name} specifications ={props.specifications.specifications} />

            <span className="price">{props.specifications.price}</span>
        </div>
    )
}
