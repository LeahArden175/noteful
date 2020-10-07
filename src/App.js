import React from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css'
import store from './store';
import MainPage from './MainPage/MainPage'
import FilteredPage from './FilteredPage/FilteredPage'
function App() {

  return (
    <div>
      <header>
        <Link className="header" to="/">Noteful
        </Link>
      </header>
      <Route 
        exact path = '/'
        component={MainPage}
      />
      <Route 
        path ='/folder/:folderId'
        component ={FilteredPage}
      />
    </div>
  )
}

export default App;
