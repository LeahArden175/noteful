import React, { Component } from 'react';
import store from './../store';
import './MainPage.css'
import FolderList from './../FolderList/FolderList';
import NotesList from './../NotesList/NotesList'


export default class MainPage extends Component {
    state= {
        folders : store.folders,
        notes: store.notes
    }

    render() {
        return(
            <div className="main-page-div">
                <FolderList folders={this.state.folders}/>
                <NotesList notes={this.state.notes}/>
            </div>
        )
    }
}