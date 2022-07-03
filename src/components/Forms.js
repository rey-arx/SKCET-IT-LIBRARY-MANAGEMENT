import React,{useState} from 'react'
import firebase from '../utils/firebase';

const Forms = () => {
    const [title,setTitle] = useState('');

  const handleOnChange = (e) =>{
    setTitle(e.target.value);
  };

  const createTodo = () =>{
    const todoRef = firebase.database.ref("Todo");
    const todo = {
        title,
        complete:false,
    };
    todoRef.push(todo);
  };
  return (
    <div>
        <h1>oii</h1>
        <input type = "text" onChange={handleOnChange} value={title}></ input>
        <button  onClick={createTodo}>Add todo</button>
    </div>
  )
}

export default Forms;