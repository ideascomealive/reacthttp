import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        currentPost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if ( !this.state.currentPost || (this.state.currentPost && this.state.currentPost.id !== this.props.id )) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    console.log(response);
                    this.setState({currentPost: response.data});
                });
            }
            

        }
    }

    //added delete post handler
    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
        .then(response => {
            console.log(response);
        });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        }

        if (this.state.currentPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.currentPost.title}</h1>
                    <p>{this.state.currentPost.body}</p>
                    <div className="Edit">
                        {/* onClick delete event */}
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;