import React, { useState ,useEffect, Fragment} from "react";
import Addbook from "./Addbook";
import './stylesmain.css' ;
import {db} from '../utils/firebase';
import { query,collection,orderBy,onSnapshot } from "firebase/firestore";
import './table.css'
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const Book = (props) => {
  //For editing The Existing values

  const [Author, setAuthor] = useState("");
	const [Book_id, setBook_id] = useState("");
	const [Book_name, setBook_name] = useState("");
	const [category, setCategory] = useState("");
	const [ISBN, setISBN] = useState("");
	const [rack,setRack] = useState("");
	const [copies,setCopies] = useState(0);
	const [edition,setEdition] = useState("");
  const [book_item, setbook_item] = useState([]);

  const [editBook,seteditBook] = useState(null);
  //Edit state over
  //Function for edit
 
  const handleEdit = (e, bID, banme, auth, cate, edi, loca, isbn, copi) => {
    seteditBook(e);
    setBook_id(bID);
    setBook_name(banme);
    setAuthor(auth);
    setCategory(cate);
    setEdition(edi);
    setRack(loca);
    setISBN(isbn);
    setCopies(copi);
  };
  //getting list
  useEffect(() => {
    const q = query(collection(db, "Book_details"), orderBy("Created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setbook_item(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  //getting list ends here

  

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
        
          <table>
            
          <thead>
            <tr>
              <th>Book_ID</th>
              <th>Book_Name</th>
              <th>Author</th>
              <th>Category</th>
              <th>Edition</th>
              <th>Location rack</th>
              <th>ISBN</th>
              <th>no_of_copies</th>
              <th>Action</th>
              
              
            </tr>
          </thead>
            <tbody>
              {book_item.map((books) =>(
            <Fragment >
              {editBook === books.id ? (
                <EditableRow 
                setBook_id={setBook_id}
                books={books}
                setBook_name={setBook_name}
                setAuthor={setAuthor}
                setCategory={setCategory}
                setEdition={setEdition}
                setRack={setRack}
                setISBN={setISBN}
                setCopies={setCopies}
                Book_id={Book_id}
                Book_name={Book_name}
                Author={Author}
                category={category}
                edition={edition}
                rack={rack}
                ISBN={ISBN}
                copies={copies}
                editBook={editBook}
                seteditBook={seteditBook} /> ) : (
                <ReadOnlyRow books={books} handleEdit ={handleEdit }/>)}
            </Fragment>
            
              ))}
            </tbody>
          
          </table>
        </div>
      
    </div>
  );
};

export default Book;