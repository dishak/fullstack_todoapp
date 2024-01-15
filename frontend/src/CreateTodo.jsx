export function CreateTodo() {
  
    return (
        <div>
         
            Title: <br /><br />
            <input id="title" type="text" placeholder="enter title of todo" onInput={
                function(e){const val=e.target.value
                    console.log(val)}
               
                }/> <br /><br />
            Description : <br /><br />
            <input type="text" placeholder="enter description of todo" /><br /><br />
            <button onClick={()=>{
              
                 alert("js")
                 
                 
            }}>ADD A TODO</button><br /><br />
        </div>

    )

}