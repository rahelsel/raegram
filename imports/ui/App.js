import React, { Component } from 'react';
 
import Post from './Post.js';
 
// App component - represents the whole app
export default class App extends Component {
  getPosts() {
    return [
      { _id: 1, caption: 'This is post 1', imgUrl:'https://vignette.wikia.nocookie.net/disney/images/5/54/Pooh-bear-clip-art-winniepooh_1_800_800.jpg/revision/latest?cb=20140909020750' },
      { _id: 2, caption: 'This is post 2', imgUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Winniethepooh.png/220px-Winniethepooh.png' },
      { _id: 3, caption: 'This is post 3', imgUrl:'https://vignette.wikia.nocookie.net/disney/images/6/6e/Winnie_The_Pooh.png/revision/latest?cb=20140618203802' },
    ];
  }
 
  renderPosts() {
    return this.getPosts().map((post) => (
      <Post key={post._id} post={post} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Raegram Posts</h1>
        </header>
 
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}