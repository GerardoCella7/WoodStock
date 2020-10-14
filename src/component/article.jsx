import React from 'react';

const Article = (props) => {
    return (
        <article>
            <h2>{props.data.title}</h2>
            <div>{props.data.content}</div>
            <hr/>
            <a href={props.data.button.link}>{props.data.button.text}</a>
        </article>
    );
};

export default Article;