import { useState, useSyncExternalStore } from "react";

export function CreateTodo(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
                <input style={{
                    padding: 10,
                    margin: 10
                }}type="text" placeholder = "title" name="" id="" onChange={function(e){
                    const value = e.target.value;
                    setTitle(value);
                }} />
                <input style={{
                    padding: 10,
                    margin: 10
                }}type="text" placeholder = "description" name="" id="" onChange={function(e){
                    const value = e.target.value;
                    setTitle(value);
                }} />
                <button onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            "content-type": "application/json"
                        }
                    })
                    .then(async function(res){
                        const json = await res.json();
                        console.log(json);
                        alert("Todo Created!");
                    })
                }} >Add a todo</button>
        </div>
}