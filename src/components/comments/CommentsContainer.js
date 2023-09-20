import React from 'react';
import Comment from "./Comment";
import {useSelector} from "react-redux";

const CommentsContainer = () => {
    const activeItem = useSelector(state => state.items.activeItem);

    return (
        <div>
            {activeItem && activeItem.comments.map((comment, index) =>
                <Comment comment={comment} key={index}/>
            )}
        </div>
    );
};

export default CommentsContainer;