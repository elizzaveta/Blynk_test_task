import './App.css';
import ItemsBlock from "./components/items/ItemsBlock";
import CommentsBlock from "./components/comments/CommentsBlock";
import React from "react";
import SideBar from "./components/side-bar/SideBar";
import styles from './App.module.css'

function App() {
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
