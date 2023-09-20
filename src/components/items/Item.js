import React from 'react';
import {localStorageUpdateValueByKey} from "../../functions/localStorage";
import {activeItemIdKey} from "../../consts/LocalStorageKeys";
import DeleteButton from "./DeleteButton";
import {useDispatch} from "react-redux";
import {setActiveItem} from "../../redux/itemsSlice";

const Item = (props) => {
    const {item} = props;
    const dispatch = useDispatch();

    const handleClick = (id) => {
        localStorageUpdateValueByKey(activeItemIdKey, id);
        dispatch(setActiveItem(item));
    }

    return (
        <div>
            <p onClick={()=>handleClick(item.id)}>{item.name}</p>
            <DeleteButton itemId={item.id}/>
        </div>
    );
};

export default Item;