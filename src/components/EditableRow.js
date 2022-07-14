import React from "react";
import "./table.css";
import {
  collection,
  query,
  addDoc,
  updateDoc,
  orderBy,
  doc,
  deleteDoc,
  onSnapshot,
  Timestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../utils/firebase";

const EditableRow = (props) => {
  //For editing The Existing values
  
  //Edit state over
  //Function for edit
    //updating a todo
    const handleUpdate = async (e) => {
      e.preventDefault()
      const taskDocRef = doc(db, 'Book_details', props.editBook)
      try{
        await updateDoc(taskDocRef, {
          Book_ID: props.Book_id,
          Book_name: props.Book_name,
          Author: props.Author,
          Category: props.category,
          Edition: props.edition,
          Location_rack: props.rack,
          ISBN: props.ISBN,
          No_of_copies: props.copies,
          Created: Timestamp.now()
        })

      } catch (err) {
        alert(err)
      }
      props.seteditBook("");    
    }
    const Cancelupdate = () =>{
      props.setBook_id(props.books.data.Book_ID);
      props.setBook_name(props.books.data.Book_name);
      props.setAuthor(props.books.data.Author);
      props.setCategory(props.books.data.Category);
      props.setEdition(props.books.data.Edition);
      props.setRack(props.books.data.Location_rack);
      props.setISBN(props.books.data.ISBN);
      props.setCopies(props.books.data.No_of_copies);
    };

  return (
    <tr>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setBook_id(e.target.value)}
          value={props.Book_id}
        />
      </td>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setBook_name(e.target.value)}
          value={props.Book_name}
        />
      </td>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setAuthor(e.target.value)}
          value={props.Author}
        />
      </td>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setCategory(e.target.value)}
          value={props.category}
        />
      </td>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setEdition(e.target.value)}
          value={props.edition}
        />
      </td>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setRack(e.target.value)}
          value={props.rack}
        />
      </td>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setISBN(e.target.value)}
          value={props.ISBN}
        />
      </td>
      <td>
        <input
          type="text" id="text"
          onChange={(e) => props.setCopies(e.target.value)}
          value={props.copies}
        />
      </td>
      <td>
        <button onClick={(event)=> handleUpdate(event)} >save</button>
      </td>
      <td><button onClick={(event)=> handleUpdate(event)} >Cancel</button> 
        </td>

    </tr>
  );
};

export default EditableRow;
