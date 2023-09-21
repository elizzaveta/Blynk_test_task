import React from 'react';
import NewItem from "./NewItem";
import ItemsList from "./ItemsList";
import containerStyles from '../../assets/css/Container.module.css'

const ItemsBlock = () => {

    return (
        <div className={containerStyles.containerWithShadow}>
            <h1>Items</h1>
            <NewItem/>
            <ItemsList/>
        </div>
    );
};

export default ItemsBlock;