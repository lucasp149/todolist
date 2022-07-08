import { useState } from "react";



export default function TodoApp() {

    const [title, setTitle] = useState("hola");

    function handleClick(e) {
        e.preventDefault();
        setTitle("Marcos");
    }

    function handleChange(e){
        var value = e.target.value;
        setTitle(value);
    }

    return (
        <div className="todoContainer">

            <form className="todoForm">
                <input onchange={handleChange} className="todoInput" defaultValue= {title} />
                <input onclick={handleClick}  type="submit" className="buttonCreate" value="create todo" />
                {title}
            </form>


            <div className="generalContainer">

            </div>

        </div>
    );
}