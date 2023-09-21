import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addItem, setActiveItem} from "../../redux/itemsSlice"
import buttonStyles from '../../assets/css/Button.module.css'
import formStyles from '../../assets/css/Form.module.css'

const NewItem = () => {
    const dispatch = useDispatch();
    const [itemName, setItemName] = useState('');

    const submitForm = (e) =>{
        e.preventDefault();

        const newItem = {
            id: Math.floor(10000000 + Math.random() * 90000000),
            name: itemName,
            comments: [],
        }
        dispatch(addItem(newItem));
        dispatch(setActiveItem(newItem));
        setItemName('');
    }

    return (
        <form onSubmit={submitForm} className={formStyles.form}>
            <input type='text' placeholder='Type name here...' value={itemName} className={formStyles.textInput} required
                   onChange={(e)=>setItemName(e.target.value)}/>
            <input type='submit' value='Add New' className={`${buttonStyles.warmBlueButton} ${buttonStyles.button}`}/>
        </form>
    );
};

export default NewItem;