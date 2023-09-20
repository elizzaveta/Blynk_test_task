import React from 'react';
import NewComment from "./NewComment";
import CommentsContainer from "./CommentsContainer";

const CommentsBlock = () => {
    return (
        <div>
            <h1>Comments</h1>
            <NewComment/>
            <CommentsContainer/>
        </div>
    );
};

export default CommentsBlock;