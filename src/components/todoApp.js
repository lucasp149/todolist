import { useState } from "react";
import React from "react";


export default function TodoApp() {

    const [title, setTitle] = useState("hola");

    function handleClick(event) {
        event.preventDefault();
        setTitle("Marcos");
    }

    return (
        <div className="todoContainer">

            <form className="todoForm">
                <input className="todoInput" defaultValue= "lopez" />
                <input onclick={handleClick} className="buttonCreate" type="submit" value="create todo" />
                {title}
            </form>


            <div className="generalContainer">

            </div>

        </div>
    );
}