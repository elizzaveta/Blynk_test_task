import React, {useState} from 'react';
import {localStorageAddCommentToItem} from "../../functions/localStorage";
import {addComment} from "../../redux/itemsSlice";
import {useDispatch, useSelector} from "react-redux";

const NewComment = () => {
    const [comment, setComment] = useState('');
    const [color, setColor] = useState('#000000');
    const dispatch = useDispatch();
    const activeItem = useSelector(state => state.items.activeItem);

    const submitForm = (e) => {
        e.preventDefault()
        const newComment = {
            color: color,
            comment: comment,
        }
        setComment('');
        setColor('#000000');
        localStorageAddCommentToItem(activeItem.id, newComment);
        dispatch(addComment(newComment));
    }


    return (
        <div>
            <form onSubmit={submitForm}>
                <input type='color' value={color} disabled={!activeItem}
                       onChange={(e)=>setColor(e.target.value)}/>
                <input type='text' value={comment} required disabled={!activeItem}
                       onChange={(e)=>setComment(e.target.value)}/>
                <input type='submit' value='Add New'/>
            </form>
        </div>
    );
};

export default NewComment;