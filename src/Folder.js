import React, { Component } from 'react';

class Folder extends Component {
  render(){
    return(
      <li className='FolderItem'>
        <h3 className='FolderItem__title'>{this.props.name}</h3>
      </li>
    )
  }
}

export default Folder