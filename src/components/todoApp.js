import { useState } from "react";
import React from "react";



export default function TodoApp() {

    const [title, setTitle] = useState("hola");
    const [todos, setTodos] = useState([]);

   

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
    }

    return (
        <div className="todoContainer">

            <form className="todoForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="todoInput" value={title} />
                <input onClick={handleSubmit} type="submit" className="buttonCreate" value="create todo" />
                {title}
            </form>


            <div className="generalContainer">
                {
                    todos.map(item => (
                        <div> {item.title}</div>
                    ))}
            </div>

        </div>
    );
}