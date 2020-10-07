import React from 'react'
import store from './../store';
import FolderItem from './../FolderItem/FolderItem'

export default function FolderList (props) {

        const list = props.folders.map((folder) =>{
            return(
                <FolderItem 
                    key = {folder.id}
                    id =  {folder.id}
                    name = {folder.name}
                />
            )
        })

    return (
        <div className="filter-list-div">
            <ul>
                {list}
            </ul>
        </div>
    )
}