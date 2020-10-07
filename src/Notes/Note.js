import React from 'react'
import {NavLink} from 'react-router-dom';
import './Note.css';


export default function Note (props){

    return (
        <li className="note-item">
            <NavLink className="note-link" to={`/note/${props.id}`}>
                <h3>{props.name}</h3>
            </NavLink>
            <p>{props.modified}</p>
            <button>DELETE</button>
        </li>
    )
}