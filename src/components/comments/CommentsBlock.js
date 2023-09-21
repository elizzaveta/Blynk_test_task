import React from 'react';
import NewComment from "./NewComment";
import CommentsContainer from "./CommentsContainer";
import containerStyles from '../../assets/css/Container.module.css'
import {useSelector} from "react-redux";

const CommentsBlock = () => {
    const activeItem = useSelector(state => state.items.activeItem);

    return (
        <div className={containerStyles.containerWithShadow}>
            <h1>Comments #{activeItem && activeItem.id}</h1>
            <CommentsContainer/>
            <NewComment/>
        </div>
    );
};

export default CommentsBlock;