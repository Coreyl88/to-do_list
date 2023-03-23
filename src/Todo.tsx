import React, { useState } from 'react'

interface item {
    id: number;
    text: string;
    completed: boolean;
}

export const Todo: React.FC = () => {
    
    const [todos, setTodos] = useState<item[]>([
        {id: 1, text: "Hello", completed: false},
        {id: 2, text: "Help Me!", completed: false}
    ])

    const [input, setInput] = useState<string>("");

    const handleToggle = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    };

    const handleSubmit = () => {
        const newTodo: item = { id: Date.now(), text: input, completed: false };
        setTodos([ ...todos, newTodo ]);
    };

  return (
    <div className='main-container'>
        <h1>To-Do List</h1>
        <ul>
            {todos.map((todo) =>(
                <li key={todo.id} onClick={() => handleToggle(todo.id)} style={{textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</li>
            ))}
        </ul>
        <input 
            type="text"
            placeholder='Add Your To-do' onChange={(e) => setInput(e.currentTarget.value)}/>
        <button onClick={handleSubmit}>Add</button>
    </div>
  )
}
