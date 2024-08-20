import WebApp from '$components/Tabs/Tab/WebApp.tab.svelte';
import MobileApp from '$components/Tabs/Tab/MobileApp.tab.svelte';
import Algo from '$components/Tabs/Tab/Algo.tab.svelte';
import DocTemplate from '$components/Tabs/Tab/DocTemplate.tab.svelte';
import Snippet from '$components/Tabs/Tab/Snippet.tab.svelte';

const TabsItems = [
  {
    "id":0,
    "label":"Web applications",
    "icon":"&#x1F310;",
    "iconlabel":"www",
    "component":WebApp,
    "comments":"web applications in svelte/pure css..."
  },
  {
    "id":1,
    "label":"Mobile applications",
    "icon":"&#x1F4F1;",
    "iconlabel":"Mobile",
    "component":MobileApp,
    "comments":"Mobile applications in react native/flutter..."
  },
  {
    "id":2,
    "label":"Algorithms",
    "icon":"&radic;&#960;=&#8747;e<sup>-...</sup>",
    "iconlabel":"Algorithms",
    "component":Algo,
    "comments":"Algorithms in python, ml..."
  },
  {
    "id":3,
    "label":"Document templates",
    "icon":"&#x1F4DD;",
    "iconlabel":"Documents",
    "component":DocTemplate,
    "comments":"Document templates in latex/figma css..."
  },
  {
    "id":4,
    "label":"Snippet codes",
    "icon":"&#x1F469;&#x200D;&#x1F4BB;",
    "iconlabel":"Snippets",
    "component":Snippet,
    "comments":"Snippet codes in every language"
  }
]

export default TabsItems;