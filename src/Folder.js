import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dummy from './dummy-store';
import NoteList from './NoteList';
import Note from './Note';

class Folder extends Component {
  render(){
    
    const notes = dummy.notes.filter(note =>
      note.folderId === this.props.id);

    const folderNote = notes.map(note =>
      <Note note={note} />
      );

    console.log(notes);
    
    return(
      <>
        <li className='FolderItem'>
          <Link to={`/Folder/${this.props.id}`}>
            <h3 className='FolderItem__title'>{this.props.name}</h3>
          </Link>
        </li>
        {folderNote}    
      </>
      );
      
      }
  }

export default Folder