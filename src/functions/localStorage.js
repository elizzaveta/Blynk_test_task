import {activeItemIdKey, itemsKey} from "../consts/LocalStorageKeys";

export function localStoragePushToItemByKey(key, newValue){
    let value = JSON.parse(window.localStorage.getItem(key));

    if(!value) value = [];

    value.push(newValue);
    const stringifyValue = JSON.stringify(value);

    window.localStorage.setItem(key, stringifyValue);
}

export function localStorageUpdateValueByKey(key, value){
    window.localStorage.setItem(key, JSON.stringify(value));
}

export function localStorageAddCommentToItem(itemId, comment){
    let items = JSON.parse(window.localStorage.getItem(itemsKey));
    let targetItem = items.find(item => item.id === itemId);
    targetItem.comments.push(comment);
    const stringifyItems = JSON.stringify(items);

    window.localStorage.setItem(itemsKey, stringifyItems);
}

export function localStorageDeleteItem(itemId){
    const items = JSON.parse(window.localStorage.getItem(itemsKey));
    const itemsWithoutTargetItem = items.filter(item => item.id !== itemId);

    localStorage.setItem(itemsKey, JSON.stringify(itemsWithoutTargetItem));
}

export function localStorageChangeActiveItem(){
    const items = JSON.parse(localStorage.getItem(itemsKey));
    const lastItem = items[items.length-1];
    localStorage.setItem(activeItemIdKey, lastItem.id);
}

