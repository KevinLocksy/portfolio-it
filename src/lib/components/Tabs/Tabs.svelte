<script>
  import TabsItems from './TabsItems.js';

  const items = TabsItems;
  const DEFAULT_TAB_ID = 0;
  let activeTabId = DEFAULT_TAB_ID;
  $: isActive = (tabId) => activeTabId == tabId;
  const changeTab = tabId => () => { activeTabId = tabId; }; //different from (activeTab) => { activeTabId = activeTab;}
</script>

<div name="tab" class="container">
  <div id="tab-list">
    <ul role="tablist" aria-label="Sample Tabs">
      {#each items as item}  
        <li class={isActive(item.id) ? 'active' : ''} role="tab" on:click={changeTab(item.id)} on:keydown={()=>{}} tabindex={isActive(item.id) ? "0" : "-1"}  aria-selected={isActive(item.id)} aria-controls="panel-{item.id}">
          <div class="tab-list-item-label"><!-- medium-large-screen-->
            <h5>{@html item.icon}</h5>
            <p>{item.label}</p>
          </div>
          <div class="tab-list-item-icon"><!-- small-screen-->
            <h3>{@html item.icon}</h3>
            <p>{item.iconlabel}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
  <div id="tab-content">
    <svelte:component this={items[activeTabId].component}/>
  </div>
</div>

<style>
  div.container[name=tab]{
    min-width: 70vw;
    --border-radius:0.5rem;
    --background-color-active:var(--tab-background-color-active,#110e2fe3);
    --background-color-hover:var(--tab-background-color-hover,#17133ee3);
    --line-color:var(--tab-line,var(--text-color));
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    min-width:min-content;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid var(--line-color);
  }
  li{
    width:10%;
    min-width:min-content;
    padding:0.5em;
    border: 0px solid transparent;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    &:hover{
      background-color: var(--background-color-hover);
    }
  }
  div.tab-list-item-label{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    gap: 0.5em;
  }
  div.tab-list-item-icon{
    display: none;
  }
  @media screen and (max-width:48em){
    li{
      width: unset;
    }
    div.tab-list-item-icon{
      display: block;
      text-align: center;
      padding: 0 0.25em;
    }
    div.tab-list-item-icon > p{
      font-size: x-small;
      padding: 0.5em 0;
    }
    div.tab-list-item-label{
      display: none;
    }
  }
  span{
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-bottom: none;
  }
  .active{
    background-color: var(--background-color-active);
  }
</style>