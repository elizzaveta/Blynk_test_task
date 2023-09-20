import {activeItemIdKey, itemsKey} from "../consts/LocalStorageKeys";

export function localStorageGetByKey(key){
    return JSON.parse(window.localStorage.getItem(key));
}

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

export function localStorageGetActiveItem(){
    const activeItemId = parseInt(window.localStorage.getItem(activeItemIdKey));

    if(!activeItemId) return null;

    const items = JSON.parse(window.localStorage.getItem(itemsKey));
    return items.find(item => item.id === activeItemId);
}

export function localStorageDeleteItem(itemId){
    const items = JSON.parse(window.localStorage.getItem(itemsKey));
    const itemsWithoutTargetItem = items.filter(item => item.id !== itemId);

    localStorage.setItem(itemsKey, JSON.stringify(itemsWithoutTargetItem));
}

