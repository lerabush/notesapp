import {useState} from "react";

const AddNewNote=({handleAddNote})=>{
    const [noteText,setNoteText]= useState('');
    const handleChange = (event) => {
        if(characterLimit-noteText.length>0) {
            setNoteText(event.target.value);
        }
    }

    const handleSaveClick=()=>{
        if(noteText.trim().length>0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    }
    const characterLimit = 250;
    return (
        <div className ="note new">
            <textarea
                rows='8'
                cols='10'
                placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit-noteText.length} remaining</small>
                <button className="save-note" onClick={handleSaveClick}>Save</button>
            </div>

         </div>);

}
export default AddNewNote;