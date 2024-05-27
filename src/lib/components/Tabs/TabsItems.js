import TabWebApp from '$components/Tabs/Tab/TabWebApp.svelte';
import TabMobileApp from '$components/Tabs/Tab/TabMobileApp.svelte';
import TabAlgo from '$components/Tabs/Tab/TabAlgo.svelte';
import TabDocTemplate from '$components/Tabs/Tab/TabDocTemplate.svelte';
import TabSnippet from '$components/Tabs/Tab/TabSnippet.svelte';

const TabsItems = [
  {
    "id":0,
    "label":"Web applications",
    "component":TabWebApp,
    "comments":"web applications in svelte/pure css..."
  },
  {
    "id":1,
    "label":"Mobile applications",
    "component":TabMobileApp,
    "comments":"Mobile applications in react native/flutter..."
  },
  {
    "id":2,
    "label":"Algorithms",
    "component":TabAlgo,
    "comments":"Algorithms in python, ml..."
  },
  {
    "id":3,
    "label":"Document templates",
    "component":TabDocTemplate,
    "comments":"Document templates in latex/figma css..."
  },
  {
    "id":4,
    "label":"Snippets",
    "component":TabSnippet,
    "comments":"Snippet codes in every language"
  }
]

export default TabsItems;