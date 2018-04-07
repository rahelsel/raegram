import React, { Component } from 'react';
 
// Post component - represents a single raegram post
export default class Post extends Component {
  render() {
    return (
      <li>
        {this.props.post.caption}
        <img src ={this.props.post.imgUrl}/>
    </li>
    );
  }
}