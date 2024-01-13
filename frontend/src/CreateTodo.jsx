export function CreateTodo() {

    return (
        <div>
          
            Title: <br /><br />
            <input type="text" placeholder="enter title of todo" /> <br /><br />
            Description : <br /><br />
            <input type="text" placeholder="enter description of todo" /><br /><br />
            <button onClick={()=>{
              
                 alert("js")
                 
                 
            }}>ADD A TODO</button><br /><br />
        </div>

    )

}