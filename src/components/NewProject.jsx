import React, { useRef} from 'react'
import Input from './Input.jsx'
import Modal from './Modal.jsx'

function NewProject({saveProject, cancelProject}) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef()

  const modalRef = useRef()

  const handleSave = () => { 
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;
    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') { 
      modalRef.current.open()
      return
    }
    saveProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate    
    })
  }
  return (
    <>    
      <Modal ref={modalRef} buttonCaption='Close'>
        <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
        <p className='text-stone-400 mb-4'>Ooops ... Looks like you forgot to enter a value</p>
        <p className='text-stone-400 mb-4'>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className='w-[35rem] mt-16 '>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button className='text-stone-800 hover:text-stone-900' onClick={cancelProject}>Cancel</button>
          </li>
          <li>
            <button className='bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md'
              onClick={handleSave}
            >Save
            </button>
          </li>
        </menu>
        <div>
          <Input type='text' ref={titleRef } label='Title'/> 
          <Input ref={ descriptionRef} label='Description' textarea/> 
          <Input type='date' ref={ dueDateRef} label='Due Date'/> 
        </div>
      </div>
    </>
  )
}

export default NewProject