import React from 'react'
import './table.css'
const ReadOnlyRow = (props) => {
  return (
    <tr>
    <td>{props.books.data.Book_ID}</td>
      <td>{props.books.data.Book_name}</td>
      <td>{props.books.data.Author}</td>
      <td>{props.books.data.Category}</td>
      <td>{props.books.data.Edition}</td>
      <td>{props.books.data.Location_rack}</td>
      <td>{props.books.data.ISBN}</td>
      <td>{props.books.data.No_of_copies}</td>
      <td>
        <button type="button" onClick={(event) =>props.handleEdit ( props.books.id,
              props.books.data.Book_ID,
              props.books.data.Book_name,
              props.books.data.Author,
              props.books.data.Category,
              props.books.data.Edition,
              props.books.data.Location_rack,
              props.books.data.ISBN,
              props.books.data.No_of_copies)}>Edit</button>
      </td>
      </tr>
  )
}

export default ReadOnlyRow