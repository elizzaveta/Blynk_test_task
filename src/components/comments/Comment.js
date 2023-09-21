import React from 'react';
import styles from '../../assets/css/comments/Comment.module.css'

const Comment = (props) => {
    const {comment} = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.colorSquare} style={{background: comment.color}}></div>
            <p className={styles.text}>{comment.comment}</p>
        </div>
    );
};

export default Comment;