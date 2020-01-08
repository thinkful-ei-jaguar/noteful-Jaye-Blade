import React, { Component } from 'react';

class Note extends Component {
  render(){
    return(
      <li className='NoteItem'>
        <h3 className='NoteItem__title'>{this.props.name}</h3>
        <p>{this.props.modified}</p>
        <button>Delete Note</button>
      </li>
    )
  }
}

export default Note;