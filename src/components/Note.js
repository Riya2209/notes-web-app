import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Note = ({id, text , date, handleDeleteNote}) => {
    return(
        <>
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <span title="delete-note" onClick={() => handleDeleteNote(id)}>
                    <FontAwesomeIcon className="trash-icon" icon={faTrashCan}></FontAwesomeIcon>
                </span>
            </div>
        </div>
        </>
    )
}

export default Note;