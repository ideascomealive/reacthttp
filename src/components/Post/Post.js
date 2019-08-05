import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post">
    {/*Change hardcoded title to props.title */}
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </article>
);

export default post;