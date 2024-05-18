import {STORAGE_KEY} from "$lib/constants/localStorage.const.js";
import LANG from "$lib/config/i18n.conf.json";
import {HTML_ATTR} from "$lib/constants/htmlAttr.const.js";
import {getLocalStorageLang} from "$lib/utils/localStorage.utils.js";
import {i18nStore} from "$store/i18n.store.js";

const DEFAULT_LANG = LANG.language[0].locale;

export function setDefaultLang(){
  //set attribute in project's html file
  var systLang = navigator.language || navigator.userLanguage || DEFAULT_LANG; 
  document.querySelector(HTML_ATTR.HTML).setAttribute(HTML_ATTR.LANG,systLang);

  //create local storage item
  const localStorageLang = getLocalStorageLang();
  if (localStorageLang == null) {
    localStorage.setItem(STORAGE_KEY.LANG, systLang);
  }

  //update writable in store, used to be able to retrieve/update value in js since localstorage not defined in .svelte
  i18nStore.set(getLocalStorageLang());
}

export function updateLang(){
  const langVal = document.getElementById("lang").value;//get dropdown value
  //update local storage
  localStorage.setItem(STORAGE_KEY.LANG, langVal);
  //update store writable
  i18nStore.set(langVal);
}