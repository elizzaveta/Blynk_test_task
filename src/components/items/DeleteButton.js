import React from 'react';
import {localStorageDeleteItem} from "../../functions/localStorage";
import {useDispatch} from "react-redux";
import {deleteItem} from "../../redux/itemsSlice";

const DeleteButton = (props) => {
    const {itemId} = props;
    const dispatch = useDispatch();

    const handleDelete = () => {
        localStorageDeleteItem(itemId);
        dispatch(deleteItem(itemId));
    }

    return (
        <button onClick={handleDelete}>Delete</button>

    );
};

export default DeleteButton;