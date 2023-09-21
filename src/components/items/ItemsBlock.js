import React from 'react';
import NewItem from "./NewItem";
import ItemsContainer from "./ItemsContainer";
import containerStyles from '../../assets/css/Container.module.css'

const ItemsBlock = () => {

    return (
        <div className={containerStyles.containerWithShadow}>
            <h1>Items</h1>
            <NewItem/>
            <ItemsContainer/>
        </div>
    );
};

export default ItemsBlock;