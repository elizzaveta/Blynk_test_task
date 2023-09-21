import React from 'react';
import Item from "./Item";
import {useSelector} from "react-redux";
import styles from '../../assets/css/items/ItemsList.module.css'

const ItemsList = () => {
    const items = useSelector(state => state.items.items);

    return (
        <div className={styles.wrapper}>
            {items && items.map(item =>
                <Item item={item} key={item.id}/>
            )}
        </div>
    );
};

export default ItemsList;