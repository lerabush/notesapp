import logo from './logo.svg';
import './App.css';
import NotesList from "./components/NotesList";
import {useState,useEffect} from "react";
import {nanoid} from "nanoid";
import Search from "./components/Search";
import AddNewNote from "./components/AddNewNote";
import Header from "./components/Header";
const App=()=>{
   const [notes,setNotes]=useState([{
       id:nanoid(),
       text:"This is my first note!",
       date:"1/01/2000",
   },
       {
           id:nanoid(),
           text:"This is my second note!",
           date:"1/01/2000",
       },
       {
           id:nanoid(),
           text:"This is my third note!",
           date:"1/01/2000",
       }]);
   const[searchText,setSearchText]=useState('');
   const[darkMode,setDarkMode]=useState(false);
    useEffect(()=>{
        const saveNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
        if(saveNotes){
            setNotes(saveNotes);
        }
    },[]);
   useEffect(()=>{
       localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
   },[notes]);
   const addNote=(text)=>{
       const date = new Date();
       const newNote ={
           id:nanoid(),
           text:text,
           date:date.toLocaleDateString()
       }
       const newNotes=[...notes,newNote];
       setNotes(newNotes);
   };
   const deleteNote=(id)=>{
       const newNotes = notes.filter((note)=>note.id!==id);
       setNotes(newNotes);
   };
  return (

      <div className={`${darkMode&&'dark-mode'}`}>
          <div className = "container">
              <Header handleDarkMode={setDarkMode}/>
              <Search handleSearchNote={setSearchText}/>
              <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
                         handleAddNote={addNote} handleDeleteNote={deleteNote}/>
          </div>
      </div>
  );
};

export default App;
