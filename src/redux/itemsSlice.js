import { createSlice } from '@reduxjs/toolkit'
import {activeItemIdKey, itemsKey} from "../consts/LocalStorageKeys";

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: JSON.parse(window.localStorage.getItem(itemsKey)) || [],
        activeItem: (JSON.parse(window.localStorage.getItem(itemsKey))).find(item => item.id === parseInt(window.localStorage.getItem(activeItemIdKey))) || null,
    },
    reducers: {
        addItem: (state, payloadAction) => {
            const item = payloadAction.payload;
            state.items.push(item);
        },
        deleteItem: (state, payloadAction) => {
            const itemId = payloadAction.payload;
            state.items = state.items.filter(item => item.id !== itemId);
            if (state.activeItem && itemId === state.activeItem.id) {
                state.activeItem = state.items.length !== 0 ? state.items[0] : null;
            }
        },
        setActiveItem: (state, payloadAction) => {
            state.activeItem = payloadAction.payload;
        },
        addComment: (state, payloadAction)=>{
            const comment = payloadAction.payload;
            state.activeItem.comments.push(comment);
            state.items.find(item=>item.id === state.activeItem.id).comments.push(comment);
        }
    }
})
export const {
    addItem,
    deleteItem,
    setActiveItem,
    addComment,
} = itemsSlice.actions