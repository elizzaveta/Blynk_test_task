import React from 'react';

const Comment = (props) => {
    const {comment} = props;

    return (
        <div>
            <p>{comment.comment}</p>
        </div>
    );
};

export default Comment;