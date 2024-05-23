<script>
  import TabsItems from './TabsItems.js';

  const items = TabsItems;
  const DEFAULT_TAB_ID = 0;
  let activeTabId = DEFAULT_TAB_ID;
  $: isActive = (tabId) => activeTabId == tabId;
  const changeTab = tabId => () => { activeTabId = tabId; }; //different from (activeTab) => { activeTabId = activeTab;}
</script>

<div class="container">
  <div id="tab-list">
    <ul role="tablist" aria-label="Sample Tabs">
      {#each items as item}  
        <li class={isActive(item.id) ? 'active' : ''}>
          <span role="tab" on:click={changeTab(item.id)} on:keydown={()=>{}} tabindex={isActive(item.id) ? "0" : "-1"}  aria-selected={isActive(item.id)} aria-controls="panel-{item.id}">{item.label}</span>
        </li>
      {/each}
    </ul>
  </div>
  <div id="tab-content">
    <svelte:component this={items[activeTabId].component}/>
  </div>
</div>

<style>
  ul{
    display: flex;
    flex-wrap: wrap;
    min-width:min-content;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid var(--tab-border-primary);
  }
  li{
    width:10%;
    min-width:min-content;

    &:hover{
      background-color: var(--tab-background-secondary);
    }
  }
  span{
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-bottom: none;
  }
  .active{
    background-color: var(--tab-background-primary);
  }
</style>