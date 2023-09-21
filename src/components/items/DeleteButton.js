import React from 'react';
import {localStorageChangeActiveItem, localStorageDeleteItem} from "../../functions/localStorage";
import {useDispatch, useSelector} from "react-redux";
import {deleteItem} from "../../redux/itemsSlice";
import buttonStyles from '../../assets/css/Button.module.css'


const DeleteButton = (props) => {
    const {itemId} = props;
    const dispatch = useDispatch();
    const activeItem = useSelector(state => state.items.activeItem);

    const handleDelete = (e) => {
        e.stopPropagation();
        localStorageDeleteItem(itemId);
        dispatch(deleteItem(itemId));
        if(activeItem.id === itemId) localStorageChangeActiveItem();
    }

    return (
        <button className={`${buttonStyles.button} ${buttonStyles.outlineRedButton}`} onClick={handleDelete}>Delete</button>

    );
};

export default DeleteButton;