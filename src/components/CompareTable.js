import React from 'react'
import TableRow from './TableRow'

export default function CompareTable(props) {

    let names = []
    for(let i = 0; i < props.compareItems.length; i++){
        names.push(<th className="table-item-names">{props.compareItems[i].name}</th>)
    }
    console.log(names)
    return names.length >= 2 ? (
        <table className="compare-table">
            <thead className="thread">
                <tr>
                    <th className="table-item-names"></th>
                    {names.length >= 2 ? names: null}
                </tr>
            </thead>
            <tbody>
                <tr className="compare-price">
                    <th scope="row" className="spec">Price</th>
                    {props.compareItems.map(item =>
                        <td key={item.id} className="columns">
                            {item.price}
                        </td>
                    )}
                </tr>
                <TableRow {...props} name="CPU"/>
                <TableRow {...props} name="GPU"/>
                <TableRow {...props} name="Screen"/>
                <TableRow {...props} name="RAM"/>
                <TableRow {...props} name="Storage"/>
                <TableRow {...props} name="OS"/>
                <TableRow {...props} name="Sizes"/>
                <TableRow {...props} name="Weight"/>

            </tbody>
        </table>
    ): null
}
