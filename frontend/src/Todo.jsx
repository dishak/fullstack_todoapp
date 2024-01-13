import { useState } from "react"


export function Todo({ todos }) {

    return (
        <div>
            {
                todos.map(element => {
                    return (<div>
                        <h1>{element.title}</h1>
                        <h2>{element.description}</h2>
                        <button>{element.completed == true ?"Completed":"MARK AS COMPLETED"}</button>
                    </div>)

                })
   
            }
        </div>
    )
}