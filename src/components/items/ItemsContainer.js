import React from 'react';
import Item from "./Item";
import {useSelector} from "react-redux";

const ItemsContainer = () => {
    const items = useSelector(state => state.items.items);

    return (
        <div>
            {items && items.map(item =>
                <Item item={item} key={item.id}/>
            )}
        </div>
    );
};

export default ItemsContainer;