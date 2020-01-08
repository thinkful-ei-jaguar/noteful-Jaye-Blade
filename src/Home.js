import React, { Component } from 'react';
import FolderList from './FolderList'

class Home extends Component {
  render(){
    return(
      <div>
        <h1>Noteful</h1>
        <FolderList  folders={this.props.state.folders}/>
      </div>
    )
  }
}

export default Home;