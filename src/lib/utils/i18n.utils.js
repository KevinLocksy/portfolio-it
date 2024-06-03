import {writable,get} from "svelte/store";
import {i18nStore} from '$store/i18n.store.js';
import {setDefaultLang,updateLang} from '$utils/lang.utils.js';
import en from "$assets/i18n/lang-en.json";
import mappingJSON from "$config/i18n.mapping.json";

const defaultLang = {
  lang: "en",
  ...en
}

/**
 * @param {string} locale 
 * @returns language dict
 */
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
  return defaultLang
}//end async function getTranslateJSON(locale)

/**
 * @returns new store with a subscribe method and the functions {init(),switchLang()} 
 */
const init18n = () => {
  const {subscribe, set} = writable(defaultLang);

  return { subscribe, 
    init: async () => {
      setDefaultLang();
      const bundle = await getTranslateJSON(get(i18nStore));
      set(bundle);
    },
    switchLang: async (newLang) => {
      updateLang(newLang);
      const bundle = await getTranslateJSON(get(i18nStore));
      set(bundle);
    }
  };
}//end const init18n

export const i18n = init18n();