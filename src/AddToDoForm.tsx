import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AddToDoFormProps {
    addToDo: AddToDo
}
export const AddToDoForm: React.FC<AddToDoFormProps> = ({ addToDo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSumbit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addToDo(newTodo);
        setNewTodo("");
    }

    return (
        <form>
            <input type="text" value={newTodo} onChange={handleChange}></input>
            <button type="submit" onClick={handleSumbit}>Add ToDo</button>
        </form>
    )
}