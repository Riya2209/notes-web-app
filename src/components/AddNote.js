import React, { useState } from "react";

const AddNote = ({addNew}) => {
    const[noteText, setNoteText] = useState('');
    const characterLimit = 200;
    const handleNewNote = (e) => {
        if(characterLimit - e.target.value.length >=0)
        {
            setNoteText(e.target.value)
        }
    }
    const handleSave = () => {
        if (noteText.length === 0){
            alert('please add a note')
        }
        else if(noteText.trim().length > 0){
            addNew(noteText);
            setNoteText('')    
        }
        else{
            alert('please add characters and valid inputs in note')
        }
        
    }
    return(
        <>
        <div className="note new-note">
            <textarea  
             rows={8} 
             cols={10} 
             placeholder="Add a new note here..."
             value={noteText}
             onChange={handleNewNote}
             />
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSave}>Save</button>
            </div>
        </div>
        </>
    )
}

export default AddNote;