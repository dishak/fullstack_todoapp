import React, { useState, useEffect } from "react";
export function GetTodos() 
{
    const [rectodo, setrectodo] = useState([{ }]);

    async function fetch_data() {
        const res = await fetch("http://localhost:3000/todos");
        // http://localhost:3000/todos
        const json = await res.json()
        // console.log(`THe response is : ${json.msg}`)
        setrectodo(json.todos)
   
    }

    fetch_data()

    return (
        <div>
            {
                <h2>{
                    rectodo.map(ele => {
                    return (<div>
                        <h1>{ele.title}</h1>
                        <button>{ele.completed==true?"Completed":"Not Completed"}</button>
                    </div>)
                })}</h2>

            }
        </div>

    )

}


