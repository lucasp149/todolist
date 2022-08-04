import TodoApp from "./todoApp";
import { useState } from "react";

export default function Todo({ item, onUpdate, onDelete }) {

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit() {
        const [newValue, setNewValue] = useState(item.title);

        function handleSubmit(e) {
            e.preventDefault();
        }

        function handleChange(e) {
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClickUpdate() {
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return (

            <form class="todoElement" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newValue} />
                <button  className="button" onClick={handleClickUpdate}>UPDATE</button>
            </form>
        )
    };

    function TodoElement() {
        return (
            <div class="todoElement">
                {item.title}
                <div class="buttonDiv">
                    <button className="button edit" onClick={() => setIsEdit(true)}>EDIT</button>
                    <button className="button delete" onClick={() => onDelete(item.id)}>DELETE</button>
                </div>
            </div>
        )
    }

    return (

        <div className="todo" >
            {/* Modificaciones sobre el DOM dependiendo del valor de isEdit*/}

            {isEdit ? <FormEdit /> : <TodoElement />}

        </div >

    )

}