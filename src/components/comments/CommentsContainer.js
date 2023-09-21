import React from 'react';
import Comment from "./Comment";
import {useSelector} from "react-redux";
import styles from '../../assets/css/comments/CommentsContainer.module.css'

const CommentsContainer = () => {
    const activeItem = useSelector(state => state.items.activeItem);

    return (
        <div className={styles.wrapper}>
            {activeItem && activeItem.comments.map((comment, index) =>
                <Comment comment={comment} key={index}/>
            )}
        </div>
    );
};

export default CommentsContainer;