import React, { Component } from 'react'
import FolderList from './../FolderList/FolderList'
import NotesList from './../NotesList/NotesList'
import store from './../store';
import './FilteredPage.css';


export default class FilteredPage extends Component {

    state= {
        folders: store.folders,
        notes: store.notes
    }

    render () {

        return (
            <div className="filtered-list-div">
                <FolderList 
                    folders={this.state.folders}
                />
                <NotesList 
                    notes= {this.state.notes}
                    folderId={this.props.match.params.folderId}
                />    
           </div>
    
        )

    }

}