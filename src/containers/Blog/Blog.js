import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }
    //added selectedPostId and set initial value to null

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( response => { 
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Jim'
                }
            });
            this.setState({posts: updatedPosts});
        });
    }

    //added postClickHandler which will take the clicked id and setState
    postClickedHandler = (id) => {
        this.setState({selectedPostId: id});
    }
    render () {
        const posts = this.state.posts.map(post => {
            return <Post 
            key={post.id} 
            title={post.title} 
            author={post.author}
            clicked={() => this.postClickedHandler(post.id)} //send clicked method to post component
            />;
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;