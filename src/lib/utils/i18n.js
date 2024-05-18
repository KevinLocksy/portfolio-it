import {writable,get} from "svelte/store";
import {lang_code} from '$store/store.js';
import {setDefaultLang,updateLang} from '$utils/lang.js';

import en from "../../assets/i18n/lang-en.json";//change path
const defaultLang = {
  lang: "en",
  ...en
}

//check in case of error
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
      console.log("init");
      console.log("get(lang_code)=",get(lang_code))
      const bundle = await getTranslateJSON(get(lang_code));
      set(bundle);
    },
    switchLang: async () => {
      const bundle = await getTranslateJSON(get(lang_code));
      updateLang();
      set(bundle);
    }
  };
}

export const i18n = init18n();

//https://svelte.dev/repl/f1b33d5d448f470cafc11110a5175fed?version=3.48.0 for the json format

//issue with the path
const mappingJSON = {
  "en-US":"./src/assets/i18n/lang-en.json",
  "fr-FR":"./src/assets/i18n/lang-fr.json",
  // "epo-EO":"./src/assets/i18n/lang-fr.json",
  // "spa-ES":"./src/assets/i18n/lang-fr.json",
}