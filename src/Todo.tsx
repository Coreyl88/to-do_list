import React from 'react'

interface item {
    id: number;
    text: string;
    complete: boolean;
}

export const Todo: React.FC = () => {
  return (
    <div className='main-container'>
        <h1>To-Do List</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
        <input 
            type="text"
            placeholder='Add Your To-do'/>
        <button>Add</button>
    </div>
  )
}
