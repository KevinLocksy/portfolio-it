import {writable,get} from "svelte/store";
import {i18nStore} from '$store/i18n.store.js';
import {setDefaultLang,updateLang} from '$utils/lang.utils.js';
import en from "$assets/i18n/lang-en.json";
import en_project from "$assets/i18n/projects/projects-en.json";
import mappingJSON from "$config/i18n.mapping.json";

const defaultLang = {
  lang: "en",
  ...en,
  ...en_project
}

/**
 * @param {string} locale 
 * @returns language dict
 */
async function getTranslateJSON(locale){
  const path = mappingJSON.main[locale];
  const path_projects = mappingJSON.projects[locale];
  //console.log("locale=",locale)
  try {
    const promise = await fetch(path);//or ...(await import(path)) with relative path //fetch better to catch errors
    const promise_projects = await fetch(path_projects);
    const bundle = await promise.json();
    const bundle_project = await promise_projects.json();
    return {
      lang: locale,
      ...bundle,
      ...bundle_project
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