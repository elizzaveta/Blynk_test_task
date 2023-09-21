import React, {useState} from 'react';
import {localStorageAddCommentToItem} from "../../functions/localStorage";
import {addComment} from "../../redux/itemsSlice";
import {useDispatch, useSelector} from "react-redux";
import formStyles from '../../assets/css/Form.module.css'
import buttonStyles from '../../assets/css/Button.module.css'

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
        <form onSubmit={submitForm} className={formStyles.form}>
            <input type='color' value={color} className={formStyles.colorInput} disabled={!activeItem}
                   onChange={(e) => setColor(e.target.value)}/>
            <textarea placeholder='Type comment here...' value={comment} className={formStyles.textInput} required
                      disabled={!activeItem}
                      onChange={(e) => setComment(e.target.value)}/>
            <input type='submit' value='Add New' className={`${buttonStyles.coldBlueButton} ${buttonStyles.button}`}/>
        </form>
    );
};

export default NewComment;