import React from "react";
import Nav from './Nav';
import NewPostFrom from './NewPostForm';
import PostList from './PostList';

function App(){
    return (
        <div>
            <h1>Hello from App.js</h1>
            <Nav />
            <NewPostFrom />
            <PostList />
        </div>
    )
}

export default App;