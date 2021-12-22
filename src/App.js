import React, { useEffect, useReducer, useState } from 'react'
import Modal from './modal'

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      const newPeople = [...state.people, action.payload]
      return {
         ...state,
          people: newPeople,
          showModal: true,
          modalContent: 'this works' 
          };
    case 'EMPTY':
      return { 
        ...state, 
        people: [], 
        showModal: true, 
        modalContent: 'Empty Field' 
      };
    default:
      return state;
  }
};

const initialState = {
  people: [],
  showModal: false,
  modalContent: ''
};

function App() {
const [name, setName] = useState('');
const [state, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = {id: new Date().getTime(), name};
      dispatch({type: 'ADD_ITEM', payload: newItem});
      setName('');
    } else {
      dispatch({type: 'EMPTY'})
    }
  }

  return (
    <>
      <form action='submit' onSubmit={handleSubmit}>
        <div className='form-container'>
          <div className='wrapper'>
            <label htmlFor='name'> Name: </label>
            <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
          </div>
          <button type='submit'>Submit</button>
        </div>
        {
          state.people.map((item) => <h2 key={item.id}>{item.name}</h2>)
        }
      </form>
    {
      state.showModal && <Modal modalContent={state.modalContent} />
    }
    </>
    )
}
export default App