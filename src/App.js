import React, { useEffect, useReducer, useState } from 'react'
import Modal from './modal'

const initialState = {
  people: [],
  showAlert: false
}

function reducer(state, action) {
 switch(action.type){
   case 'UPDATE_NAME':
     const updatedNames = [...state.people, { name: action.payload, toggle: false }];
     return { ...state, people: updatedNames };

    case 'DELETE':
      const newNames = state.people.filter(( item, idx) => action.payload !== idx);
      return { ...state, people: newNames }

    case 'CROSS_OFF':
      return {
        people: state.people.map((item, idx) => {
          return idx === action.payload? {...item, toggle: !item.toggle }: item;
        })
      };
      
    default:
      throw new Error('something has gone south...');
 } 
}

function App() {

const [state, dispatch] = useReducer(reducer, initialState);
const [name, setName] = useState('');

const handleSubmit = (e) => {
   e.preventDefault();
  if (name) {
    dispatch({ type: 'UPDATE_NAME', payload: name });
    setName('');
  }
}

return (
  <>
    <form onSubmit={handleSubmit}>
    <input name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
    <button >ADD</button>
  </form>
  <div style={{ width: '600px', margin: 'auto' }}>
    {
    state.people.map( (item, index) => {
    return (
      <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1
        style={{ textDecoration: `${item.toggle? 'line-through' : ''}` }} 
        onClick={() => dispatch({ type: 'CROSS_OFF', payload: index })}>{item.name}</h1>
        <button onClick={() => dispatch({ type: 'DELETE', payload: index })}>DELETE</button>
      </div>
    )
  })
  }
  </div>
  
  </>
)
}
export default App