import React, {useState} from 'react';
import {localStoragePushToItemByKey} from "../../functions/localStorage";
import {itemsKey} from "../../consts/LocalStorageKeys";
import {useDispatch} from "react-redux";
import {addItem, setActiveItem} from "../../redux/itemsSlice";

const NewItem = () => {
    const dispatch = useDispatch();
    const [itemName, setItemName] = useState('');

    const submitForm = (e) =>{
        e.preventDefault();

        const newItem = {
            id: Date.now(),
            name: itemName,
            comments: [],
        }
        localStoragePushToItemByKey(itemsKey, newItem);
        dispatch(addItem(newItem));
        dispatch(setActiveItem(newItem));
        setItemName('');
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type='text' value={itemName} required
                       onChange={(e)=>setItemName(e.target.value)}/>
                <input type='submit' value='Add New'/>
            </form>
        </div>
    );
};

export default NewItem;