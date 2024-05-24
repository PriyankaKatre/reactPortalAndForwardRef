import React, { useState } from 'react'

function NewTask({onAdd, onDelete }) {
  const [enteredTask, setEnteredTask] = useState('');


  const handleChange = (event) => { 
    setEnteredTask(event.target.value)
  }
  const handleClick = () => { 
    onAdd(enteredTask)
    setEnteredTask('')
      console.log('enteredTask', enteredTask)
  }
  return (
    <div className='flex items-center gap-4'>
      <input
        type='text'       
        onChange={handleChange}
        value={enteredTask}
        className='w-64 px-2 py-1 rounded-sm bg-stone-200' />
      <button
        className='text-stone-700 hover:text-stone-950'
        onClick={handleClick}>
        Add Task
      </button>
    </div>
  )
}

export default NewTask
