import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        currentPost: null
    }

    // the infinite loop was created because we update state inside an update handler
    componentDidUpdate() {
        if (this.props.id) {
            //added new condition to test for new currentPost before axios call
            //if we don't have a current post OR (if we have a currentPost AND the id's are different)
            if ( !this.state.currentPost || (this.state.currentPost && this.state.currentPost.id !== this.props.id )) {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    console.log(response);
                    this.setState({currentPost: response.data});
                });
            }
            

        }
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
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;