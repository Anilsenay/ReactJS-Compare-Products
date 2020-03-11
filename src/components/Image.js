import React from 'react'

export default function Image(props) {
    return (
        <img src={props.src} alt={props.info} width="90%" height="90%"/>
    )
}
