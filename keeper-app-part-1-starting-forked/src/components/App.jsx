import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"



function App() {
  return (
    <div>
      <Header />
      {notes.map(newNote => <Note 
    id={newNote.id}
    key={newNote.id}
    title={newNote.title}
    content={newNote.content}
  />
)}
      <Footer />
    </div>
    );
}

export default App;