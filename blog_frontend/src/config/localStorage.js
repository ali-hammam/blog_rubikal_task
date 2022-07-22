export const addToLocalStorage = (key, val) => {
  window.localStorage.setItem(key, val)
}

export const getFromLocalStorage = (key) => {
  return window.localStorage.getItem(key);
}

export const removeFromLocalStorate = (key) => {
  window.localStorage.removeItem(key)
}