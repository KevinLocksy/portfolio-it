import {writable} from "svelte/store";
import LANG from "$config/i18n.conf.json";

export const i18nStore = writable(LANG.language[0].value);