import React, { Component } from 'react';
import Folder from './Folder'

class FolderList extends Component {
  render(){
    const { folders } = this.props
    return(
      <section className='FolderList'>
        <ul className='BookmarkList__list' aria-live='polite'>
          {folders.map(folder =>
            <Folder
              key={folder.id}
              {...folder}
            />
          )}
        </ul>
        <button>Add Folder</button>
      </section>
    )
  }
}

export default FolderList