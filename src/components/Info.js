import React from 'react'

export default function Info(props) {

    let spec = props.specifications

    const items = []
    
    for(let i = 0; i < spec.length; i++){
        items.push(<li key={i}>{spec[i]}</li>)
    }

    return (
        <div>
            <span>{props.name}</span>
            <ul>
                {items}
            </ul>
        </div>
    )
}
