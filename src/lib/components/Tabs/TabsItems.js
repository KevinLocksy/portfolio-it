import WebApp from '$components/Tabs/Tab/WebApp.tab.svelte';
import MobileApp from '$components/Tabs/Tab/MobileApp.tab.svelte';
import Algo from '$components/Tabs/Tab/Algo.tab.svelte';
import DocTemplate from '$components/Tabs/Tab/DocTemplate.tab.svelte';
import Snippet from '$components/Tabs/Tab/Snippet.tab.svelte';

const TabsItems = [
  {
    "id":0,
    "label":"Web applications",
    "component":WebApp,
    "comments":"web applications in svelte/pure css..."
  },
  {
    "id":1,
    "label":"Mobile applications",
    "component":MobileApp,
    "comments":"Mobile applications in react native/flutter..."
  },
  {
    "id":2,
    "label":"Algorithms",
    "component":Algo,
    "comments":"Algorithms in python, ml..."
  },
  {
    "id":3,
    "label":"Document templates",
    "component":DocTemplate,
    "comments":"Document templates in latex/figma css..."
  },
  {
    "id":4,
    "label":"Snippets",
    "component":Snippet,
    "comments":"Snippet codes in every language"
  }
]

export default TabsItems;