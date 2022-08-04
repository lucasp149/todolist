import { useEffect, useState } from "react";
import React from "react";
import Todo from "./todo";
import './todoApp.css';


export default function TodoApp() {

    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);
   
    useEffect(()=>{
        var locali = JSON.parse(localStorage.getItem("notes"));
        if(locali!=null){
            setTodos(locali);
            console.log(locali);
        }
        else{
            setTodos([]);
        }
        
    },[]);


    function handleChange(e) {
        var value = e.target.value;
        setTitle(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        let temp = [...todos];
        temp.unshift(newTodo);

        setTodos(temp);
        setTitle("");

        localStorage.setItem("notes", JSON.stringify(temp));
    }

    function handleUpdate(id, value) {
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp);
        localStorage.setItem("notes", JSON.stringify(temp));
        
        
    }

    function handleDelete(id) {
        const temp = todos.filter(item => item.id !== id);
        console.log(temp);
        setTodos(temp);
        localStorage.setItem("notes", JSON.stringify(temp));
    }

    return (

        <div className="todoContainer">
            <h1 className="titulo">Mis Notas</h1>
            <form className="todoForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="todoInput" value={title} />
                <input onClick={handleSubmit} type="submit" className="button buttonCreate" value="CREATE" />
            </form>


            <div className="generalContainer">
                
                {   
                    todos.map((item) => (

                <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                )
                ) 
                
                }
            </div>

        </div>
    );
}