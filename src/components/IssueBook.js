import React,{useEffect, useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";
import IssueBook_details from "./IssueBook_details";
import { db } from "../utils/firebase";
import { query, collection, orderBy, onSnapshot ,doc,setDoc,} from "firebase/firestore";

const IssueBook = (props) => {

    const [issue_details,setissue_details]=useState([]);
    const [returned,notreturned] = useState();

 

  //getting list
  useEffect(() => {
    const q = query(collection(db, "Issued_Books"), orderBy("Issue_date", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setissue_details(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  //ends here

  //return book
  async function updateDocument(id) {
    const itemRef = doc(db, "Issued_Books", id);
    setDoc(itemRef, {
      status: "returned",
    });
    
  }

  console.log(issue_details);
  return (
    <div>
      <ol class="breadcrumb mt-4 mb-4 bg-light p-2 border">
        <li class="breadcrumb-item">
          <a href="dashboard" onClick={() => {<Dashboard />}}>
            Dashboard
          </a>
        </li>
        <li class="breadcrumb-item active">Issue Book Management</li>
      </ol>
      <div class="card-header">
        <div class="row">
          <div class="col col-md-6">Issue Book Management</div>
          <div class="col col-md-6" align="right">
            
          </div>
        </div>
      <table>
      <thead>
            <tr>
              <th>Book ID</th>
              <th>BOOK NAME</th>
              <th>STUDENT ID</th>
              <th>STUDENT NAME</th>
              <th>DEPARTMENT</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
            <tbody>
              {issue_details.map((issues) =>(
            <tr>
              <td>{issues.data.Book_ID}</td>
              <td>{issues.data.Book_name}</td>
              <td>{issues.data.roll_no}</td>
              <td>{issues.data.stuname}</td>
              <td>{issues.data.department}</td>
              <td><button id="clr" type="button" class="issues.BtColor">{issues.data.status}</button></td> 
              <td><button id="ret" type="button"  onClick={()=> updateDocument(issues.id)}>RETURN BOOK</button></td> 

            </tr>
              ))}
            </tbody>
          </table>
          </div>
    </div>
  );
};

export default IssueBook;