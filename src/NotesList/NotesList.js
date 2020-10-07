import React from 'react';
import Note from './../Notes/Note';
import './NotesList.css'

export default function NotesList (props){

    const list = props.notes.map((note) => {
        return(
            <Note 
                key = {note.id}
                id = {note.id}
                name = {note.name}
                modified = {note.modified}
            />
        )
    })

    return (
        <div className="note-list-div">
            <ul className="note-list">
                {list}
            </ul>
        </div>
    )
}   