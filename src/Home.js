import React, { Component } from 'react';
import FolderList from './FolderList';
import NoteList from './NoteList';
import './Home.css';

class Home extends Component {
  render(){
    return(
      <div className='home-div'>
        <h1>Noteful</h1>
        <FolderList  folders={this.props.state.folders}/>
        <NoteList notes={this.props.state.notes} />
      </div>
    )
  }
}

export default Home;