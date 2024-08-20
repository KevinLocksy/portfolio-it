import WebApp from '$components/Tabs/Tab/WebApp.tab.svelte';
import MobileApp from '$components/Tabs/Tab/MobileApp.tab.svelte';
import Algo from '$components/Tabs/Tab/Algo.tab.svelte';
import DocTemplate from '$components/Tabs/Tab/DocTemplate.tab.svelte';
import Snippet from '$components/Tabs/Tab/Snippet.tab.svelte';

const TabsItems = [
  {
    "id":0,
    "label":"Web applications",
    "label_s":"www",
    "icon":"&#x1F310;",
    "component":WebApp,
    "comments":"web applications in svelte/pure css..."
  },
  {
    "id":1,
    "label":"Mobile applications",
    "label_s":"Mobile",
    "icon":"&#x1F4F1;",
    "component":MobileApp,
    "comments":"Mobile applications in react native/flutter..."
  },
  {
    "id":2,
    "label":"Algorithms",
    "label_s":"Algorithms",
    "icon":"&radic;&#960;=&#8747;e<sup>-...</sup>",
    "component":Algo,
    "comments":"Algorithms in python, ml..."
  },
  {
    "id":3,
    "label":"Document templates",
    "label_s":"Documents",
    "icon":"&#x1F4DD;",
    "component":DocTemplate,
    "comments":"Document templates in latex/figma css..."
  },
  {
    "id":4,
    "label":"Snippet codes",
    "label_s":"Snippets",
    "icon":"&#x1F469;&#x200D;&#x1F4BB;",
    "component":Snippet,
    "comments":"Snippet codes in every language"
  }
]

export default TabsItems;