import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( response => { 
            //limit the number of posts to 4 using slice
            const posts = response.data.slice(0, 4);
            //add author data to the posts (not available in jsonplaceholder)
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Jim'
                }
            });
            //use updatedPosts to setState
            this.setState({posts: updatedPosts});
        });
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} author={post.author}/>
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;