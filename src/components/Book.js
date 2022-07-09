import React ,{useState, useEffect}from "react";
import { db } from "../utils/firebase";
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
import Addbook from "./Addbook";
import './stylesmain.css' 
import './table.css' 

const Book = (props) => {

  const [data,setData] = useState("");
  const [book, getBook] = useState([]);


  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      getBook(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  
  
  return (
    <div>
        <h1>Book Management</h1>
        <ol class="breadcrumb mt-4 mb-4 bg-light p-2 border">
          <li class="breadcrumb-item">
            <a href="index.php">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">Book Management</li>
        </ol>
        <div class="card mb-4">
          <div class="card-header">
            <div class="row">
              <div class="col col-md-6">
                
                Book Management
              </div>
              <div class="col col-md-6" align="right">
                <button class="btn btn-success btn-sm" onClick={() =>props.setPage(<Addbook />)}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Completed</th>
              <th>created</th>
            </tr>
          </thead>
          <tbody>
            {book.map((books) => (
              <tr>
                <td>{books.data.title}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>
  );
};

export default Book;
