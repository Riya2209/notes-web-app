import React, { useEffect, useState } from "react";
import {nanoid } from 'nanoid';
import NotesList from "./components/NotesList"
import './App.css'
import Search from "./components/Search";
import ToggleHeader from "./components/ToggleHeader";

function App() {
  
  const [notes, setNotes] = useState([{
    id:nanoid(),
    text: "this is first note",
    date:"16/06/23"
  },
  {
    id:nanoid(),
    text: "this is second note",
    date:"18/06/23"
  }
]);
const [searchText, setSearchText] = useState('')
const [darkMode, setDarkMode] = useState(false)

// useEffect(()=> {
//   const savedNotes = JSON.parse(
//     localStorage.getItem('react-notes-practice-app-data')
//     );
//     if(savedNotes){
//       setNotes(savedNotes)
//     }
// },[])

// useEffect(()=>{
//   localStorage.setItem('react-notes-practice-app-data', 
//   JSON.stringify(notes))
// },[notes])

useEffect(() => {
  if (typeof Storage !== "undefined") {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-practice-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }
}, []);

useEffect(() => {
  if (localStorage.getItem("react-notes-practice-app-data")) {
    console.log(localStorage.getItem("react-notes-practice-app-data"))
    localStorage.setItem("react-notes-practice-app-data", JSON.stringify(notes));
    sessionStorage.setItem("react-notes-practice-app-data", JSON.stringify(notes));

  }
}, [notes]);

const addNewNote = (text) => {
  const date = new Date();
  const newNote = {
    id : nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  setNotes([...notes, newNote])
}

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
}

const handleSearchNote = (text) => {
    setSearchText(text);
    // console.log(searchText);
}



  return (
    <div className={`${darkMode && 'dark-mode'}`}>
  <div className="container">
      <header>
        {/* <h2>Notes</h2> */}
        <ToggleHeader handleDarkMode = {setDarkMode}/>
      </header>

      <main>
        <Search handleSearchText = {handleSearchNote}/>
      
        <NotesList  
         notes={notes.filter((note) => {
          return note.text.toLowerCase().includes(searchText)
         })} 
         addNew = {addNewNote} 
         handleDeleteNote = {deleteNote}
         />
      </main>


    </div>
    </div>
  
  );
}

export default App;
