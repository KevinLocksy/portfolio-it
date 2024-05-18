import {STORAGE_KEY_LANG, LANG} from "$lib/constants/localStorage.js";
import {lang_code} from "$store/store.js";

const ATTRIBUTE_KEY = "lang";
const DEFAULT_LANG = LANG.language[0].locale;

export function setDefaultLang(){
  //set attribute in project's html file
  var systLang = navigator.language || navigator.userLanguage || DEFAULT_LANG; 
  document.querySelector("html").setAttribute(ATTRIBUTE_KEY,systLang);

  //create local storage item
  const localStorageLang = localStorage.getItem(STORAGE_KEY_LANG);
  if (localStorageLang == null) {
    localStorage.setItem(STORAGE_KEY_LANG, systLang);
  }

  //update writable in store, used to be able to retrieve/update value in js since localstorage not defined in .svelte
  lang_code.set(localStorage.getItem(STORAGE_KEY_LANG));
}

export function updateLang(){
  const langVal = document.getElementById("lang").value;
  //update local storage
  localStorage.setItem(STORAGE_KEY_LANG, langVal);
  //update store writable
  lang_code.set(langVal);
}