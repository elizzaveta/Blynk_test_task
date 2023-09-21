import React from 'react';
import DeleteButton from "./DeleteButton";
import {useDispatch, useSelector} from "react-redux";
import {setActiveItem} from "../../redux/itemsSlice";
import styles from '../../assets/css/items/Item.module.css';

const Item = (props) => {
    const {item} = props;
    const activeItem = useSelector(state => state.items.activeItem);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setActiveItem(item));
    }

    return (
        <div className={`${styles.wrapper} ${item.id === activeItem.id ? styles.activeItem : ''}`}
             onClick={()=>handleClick(item.id)}>
            <p className={styles.itemName}>{item.name}</p>
            <div className={styles.badge}>{item.comments.length}</div>
            <DeleteButton itemId={item.id}/>
        </div>
    );
};

export default Item;