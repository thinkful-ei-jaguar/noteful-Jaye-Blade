import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import dummy from './dummy-store'
//import FolderList from './FolderList'
//import NoteList from './NoteList'

function App() {
  return (
    <main className='App'>
      <Switch>
        <Route exact path='/' render={() => <Home state={dummy}/>} />

        
        {/* <Route path='/Folder/:folderID' component={FolderList} />
        <Route path='/note/:noteID' component={NoteList} /> */}
      </Switch>
    </main>
  );
}

export default App;