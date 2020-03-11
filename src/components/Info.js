import React from 'react'

export default function Info(props) {

    let spec = props.specifications

    const items = []
    
    for(let i = 0; i < spec.length; i++){
        items.push(<li key={i}>{spec[i]}</li>)
    }

    return (
        <div>
            <span className="item-name">{props.name}</span>
            <ul>
                {items}
            </ul>
        </div>
    )
}
