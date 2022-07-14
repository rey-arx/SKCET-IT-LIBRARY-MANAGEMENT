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
        <input type="text" id="text" />
      </td>
       

    </tr>
  );
};

export default EditableRow;
