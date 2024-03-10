import React, { Children } from "react"

export default function ChildComponent({number, name, increase, children}) {
    const componentName = 'ChildComponent';


    return(
        <div>
            <h1>Tao la {componentName}</h1>
            <h3>Danh sach props:</h3>
            <p>number: {number * 2}</p>
            <p>name: {name}</p>
            <button onClick={increase}>+</button>
            {children}
        </div>
    )
}