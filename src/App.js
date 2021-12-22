import React, { useEffect, useReducer, useState } from 'react'
import Modal from './modal'

const initialValue = {
  people: [],
  showAlert: false,
  alertContent: ''
}

const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_ITEM':
      // const newPeople = [...state.people, action.payload];
      return {
        ...state,
        people: [...state.people, {name: action.payload, toggle: false}],
        showAlert: true,
        alertContent: 'Item Added'
      }
    case 'CROSS_NAME':
      return {
        people: state.people.map((item, index) => {
          return index === action.index ? { ...item, toggle: !item.toggle } : item
        })
      };
    default :
      return state;
  }
}

function App() {
const [name, setName] = useState('');
const [state, dispatch] = useReducer(reducer, initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name){
      //const newName = { id: new Date().getTime(), name };
      dispatch({ type: 'ADD_ITEM', payload: name });
      setName('');
    } else {
      console.log('empty value')
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
          state.people.map((item, index) => {
          <h3 
          style={{textDecoration: `${item.toggle && 'line-through'}`}} 
          key={index} 
          onClick={() => dispatch({ type:'CROSS_NAME', index })}>{item.name}</h3>
        })
        }
      </form>
        {
          alert.show && <Modal content={alert.content} />
        }
    </>
    )
}
export default App