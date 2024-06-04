export const getFromLocalStorage = (key, defaultValue = null) => {
    let data = localStorage.getItem(key);

    return data ?? defaultValue;
}

export const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, data);
}