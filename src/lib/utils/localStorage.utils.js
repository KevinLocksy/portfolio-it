import {STORAGE_KEY} from '$constants/localStorage.const.js'

export function getLocalStorageTheme(){
  const localStorageTheme = localStorage.getItem(STORAGE_KEY.THEME);
  return localStorageTheme
}

export function getLocalStorageLang(){
  const localStorageTheme = localStorage.getItem(STORAGE_KEY.LANG);
  return localStorageTheme
}