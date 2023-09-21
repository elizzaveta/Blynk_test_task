import './App.css';
import ItemsBlock from "./components/items/ItemsBlock";
import CommentsBlock from "./components/comments/CommentsBlock";
import React, {useEffect} from "react";
import SideBar from "./components/side-bar/SideBar";
import styles from './App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {localStorageUpdateValueByKey} from "./functions/localStorage";
import {activeItemIdKey, itemsKey} from "./consts/LocalStorageKeys";
import {addItem, setActiveItem} from "./redux/itemsSlice";

function App() {
    const dispatch = useDispatch();
    const activeItem = useSelector(state => state.items.activeItem);
    const items = useSelector(state => state.items.items);

    useEffect(()=>{
        if(!window.localStorage.getItem(itemsKey) || JSON.parse(window.localStorage.getItem(itemsKey)).length === 0){
            const defaultItem = {
                id: 96428753,
                name: 'Test',
                comments: [{
                    color:'#000000',
                    comment: 'Test comment',
                }],
            }
            dispatch(addItem(defaultItem));
            dispatch(setActiveItem(defaultItem));
        }
    },[dispatch])

    useEffect(() => {
        const handleBeforeUnload = () => {
            if(items.length === 0){
                localStorageUpdateValueByKey(activeItemIdKey, null);
                localStorageUpdateValueByKey(itemsKey, []);
            }else{
                localStorageUpdateValueByKey(activeItemIdKey, activeItem.id);
                localStorageUpdateValueByKey(itemsKey, items);
            }
        };

        window.addEventListener('unload', handleBeforeUnload);

        return () => {
            window.removeEventListener('unload', handleBeforeUnload);
        };
    }, [activeItem, items]);


    return (
        <div className={`App ${styles.wrapper}`}>
            <SideBar/>
            <div className={styles.mainContainer}>
                <ItemsBlock/>
                <CommentsBlock/>
            </div>
        </div>
    );
}

export default App;
