import React,{useState} from 'react'
import firebase from '../utils/firebase';
import {db} from "../utils/firebase";
import {collection,addDoc,Timestamp} from 'firebase/firestore';

const Forms = () => {
    const [title,setTitle] = useState('');


  /* using realtime Database 
  const handleOnChange = (e) =>{
    setTitle(e.target.value);
  }; */

  /*const createTodo = () =>{
     Using Realtime databaseconst todoRef = firebase.database.ref("Todo");
    const todo = {
        title,
        complete:false,
    };
    todoRef.push(todo);
  };*/
  const handleSubmit = async (e) => {
    e.preventDefault()
      await addDoc(collection(db, 'tasks'), {
        title: title,
        completed: false,
        created: Timestamp.now()
      })
  };
  return (
    <div>
        <h1>oii</h1>
        <input type = "text" onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}></ input>
        <button  onClick={handleSubmit}>Add todo</button>
    </div>
  )
}

export default Forms;