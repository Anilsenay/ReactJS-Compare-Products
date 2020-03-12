import React from 'react'

export default function TableRow(props) {
    return (
        <tr className="compare-price">
            <th scope="row" className="spec">{props.name}</th>
            {props.compareItems.map(item =>
                <td key={item.id} className="columns">
                    {item.detailedSpecs[props.name]}
                </td>
            )}
        </tr>
    )
}
