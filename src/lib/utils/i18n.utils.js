import {writable,get} from "svelte/store";
import {i18nStore} from '$store/i18n.store.js';
import {setDefaultLang,updateLang} from '$utils/lang.utils.js';

import en from "$assets/i18n/lang-en.json";
import mappingJSON from "$lib/config/i18n.mapping.json";

const defaultLang = {
  lang: "en",
  ...en
}

async function getTranslateJSON(locale){
  const path = mappingJSON[locale];

  try {
    const promise = await fetch(path);
    const bundle = await promise.json();
    return {
      lang: locale,
      ...bundle//or ...(await import(path)) with relative path //fetch better to catch errors
    };
  }catch{
    console.log("error with the dict path:",path);
  }
  //return default lang if error
  return defaultLang

}

const init18n = () => {
  const {subscribe, set} = writable(defaultLang);

  return { subscribe, 
    init: async () => {
      setDefaultLang();
      const bundle = await getTranslateJSON(get(i18nStore));
      set(bundle);
    },
    switchLang: async () => {
      updateLang();
      const bundle = await getTranslateJSON(get(i18nStore));
      set(bundle);
    }
  };
}

export const i18n = init18n();