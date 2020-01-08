import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import dummy from './dummy-store'
import FolderList from './FolderList'
import Folder from './Folder'
//import NoteList from './NoteList'

function App() {
  return (
    <main className='App'>
      <Switch>
        <Route exact path='/' render={() => <Home state={dummy}/>} />        
        
        
        
        <Route path='/Folder/:folderid' component={Folder} />
        
        {/* <Route path='/note/:noteID' render={NoteList} /> */}
      </Switch>
    </main>
  );
}

export default App;