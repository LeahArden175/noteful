import React from 'react';
import {NavLink} from 'react-router-dom';
import './FolderItem.css'


export default function FolderItem (props){

    return (
        <li className="folder-item">
            <NavLink className="folder-link" to={`/folder/${props.id}`}>
                <h3 className="folder-item-text">{props.name}</h3>
            </NavLink>
        </li>
    )
}