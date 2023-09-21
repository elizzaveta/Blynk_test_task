import React from 'react';
import {useDispatch} from "react-redux";
import {deleteItem} from "../../redux/itemsSlice";
import buttonStyles from '../../assets/css/Button.module.css'


const DeleteButton = (props) => {
    const {itemId} = props;
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.stopPropagation();
        dispatch(deleteItem(itemId));
    }

    return (
        <button className={`${buttonStyles.button} ${buttonStyles.outlineRedButton}`} onClick={handleDelete}>Delete</button>
    );
};

export default DeleteButton;