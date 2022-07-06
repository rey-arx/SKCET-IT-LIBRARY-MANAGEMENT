import React, { useState, useEffect } from "react";
import firebase from "../utils/firebase";
import { db } from "../utils/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  Timestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Forms = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  //Getting list from Firestore
  useEffect(() => {
    const q = query(
      collection(db,"tasks"), orderBy('created', 'asc')
    );

   onSnapshot(q, (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ id: doc.id,
        data: doc.data() })));
      setTitle("");
    });
    
  }, []);

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
    e.preventDefault();

    //adding items
    await addDoc(collection(db, "tasks"), {
      title: title,
      completed: false,
      created: Timestamp.now(),
    });

  };

  //Deleting Items
  async function handleDelete(id) {
    let request = await deleteDoc(doc(db, "tasks", id));
    console.log(request)
  }
  /*old use effect
  useEffect(() => {
    const q = query(collection(db, 'tasks'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setTitle(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])
*/
const oi = () =>{
  console.log("eee");
}
  return (
    <div>
      <h1>oii</h1>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value.toUpperCase())}
        value={title}
      ></input>
      <button onClick={handleSubmit}>Add todo</button>
      <button onClick={oi}>hi</button>
      <div>
        {tasks.map((task) => (
          <div>   
          {task.data.title}         
          <button className='task__deleteButton' onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Forms;
