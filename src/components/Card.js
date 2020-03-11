import React from 'react'
import image from '../img/img.png'
import Info from './Info'
import Image from './Image'

export default function Card(props) {

    return (
        <div className="card">
            <div class="card_overlay"><div class="compare">Compare</div></div>
            <Image src={image} info={props.specifications.name} test="../img/img.png"/>
            <Info name={props.specifications.name} specifications ={props.specifications.specifications} />
            <span className="price">{props.specifications.price}</span>
        </div>
    )
}
