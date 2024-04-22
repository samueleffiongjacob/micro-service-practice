import React from 'react';
import PostCreate from './PostCreate';
import PostList from './Postlist';
import './App.css';


class App extends React.Component {
  render(){
    return (
      <div className="container">
        <PostCreate />
        <hr className='border-bottom border-primary pb-0 mb-4'/>
        <h1>Posts</h1>
        <PostList />
      </div>
    );
  }
}

export default App;

