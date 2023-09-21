export function localStorageUpdateValueByKey(key, value){
    window.localStorage.setItem(key, JSON.stringify(value));
}
