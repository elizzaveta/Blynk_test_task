import React from 'react';
import NewItem from "./NewItem";
import ItemsContainer from "./ItemsContainer";
import styles from '../../assets/css/items/ItemsBlock.module.css'

const ItemsBlock = () => {

    return (
        <div className={styles.wrapper}>
            <h1>Items</h1>
            <NewItem/>
            <ItemsContainer/>
        </div>
    );
};

export default ItemsBlock;