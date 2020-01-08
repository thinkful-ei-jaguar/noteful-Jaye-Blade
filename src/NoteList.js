import React, { Component } from 'react';
import Note from './Note';

class NoteList extends Component {
  render(){
    const { notes } = this.props
    return(
      <section className='NoteList'>
        <ul className='NoteList__list' aria-live='polite'>
          {notes.map(note =>
            <Note
              key={note.id}
              {...note}
            />
          )}
        </ul>
        <button>Add Note</button>
      </section>
    )
  }
}

export default NoteList;