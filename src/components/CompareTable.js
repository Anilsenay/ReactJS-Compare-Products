import React from 'react'

export default function CompareTable(props) {

    let names = []
    for(let i = 0; i < props.compareItems.length; i++){
        names.push(<th>{props.compareItems[i].name}</th>)
    }
    console.log(names)
    return names.length >= 2 ? (
        <table className="compare-table">
            <thead className="thread">
                <tr>
                    <th></th>
                    {names.length >= 2 ? names: null}
                </tr>
            </thead>
            <tbody>
                <tr className="price">
                    <th scope="row">Price</th>
                </tr>
            </tbody>
        </table>
    ): null
}
