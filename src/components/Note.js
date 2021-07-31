
const Note = ({id,text,date,handleDeleteNote})=> {
    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <p><img onClick={()=>handleDeleteNote(id)} className="delete-icon"src="trash.png"></img></p>
            </div>
        </div>
    );
};
export default Note;