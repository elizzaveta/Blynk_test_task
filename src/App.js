import './App.css';
import ItemsBlock from "./components/items/ItemsBlock";
import CommentsBlock from "./components/comments/CommentsBlock";
import React from "react";

function App() {
    return (
        <div className="App">
            <ItemsBlock/>
            <CommentsBlock/>
        </div>
    );
}

export default App;
