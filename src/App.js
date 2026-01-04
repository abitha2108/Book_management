import React, { useState } from "react";

function App() {
  const [books] = useState([
    { _id: 1, title: "Clean Code", author: "Robert C Martin" },
    { _id: 2, title: "React in Action", author: "Mark Tielens" },
    { _id: 3, title: "JavaScript: The Good Parts", author: "Douglas Crockford" },
    { _id: 4, title: "You Don’t Know JS", author: "Kyle Simpson" },
    { _id: 5, title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
    { _id: 6, title: "Introduction to Algorithms", author: "Cormen et al." },
    { _id: 7, title: "Design Patterns", author: "Erich Gamma" }
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Library Book Management</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
