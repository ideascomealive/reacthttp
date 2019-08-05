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
            //we can safely use setState inside the .then
            this.setState({posts: response.data});
            console.log(response);
        });
    }

    render () {
        //create a const to hold our mapped posts
        //then pass in some props like title and key
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} />
        });
        
        return (
            <div>
                <section className="Posts">
                {/* Output the posts const */}
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