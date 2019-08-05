import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        currentPost: null
    }
    //added state to manage currentPost

    //componentDidUpdate added to get full post from id
    componentDidUpdate() {
        if (this.props.id) {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => {
                console.log(response);
                this.setState({currentPost: response.data});
            });

        }
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        
        //handle first error: the prop.id is available before the axios request finishes
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        }

        //change the condition to this.state.currentPost to make sure the axios request is complete
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