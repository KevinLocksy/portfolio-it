<script>
  import {clickOutside} from '$utils/node.utils.js';
  export let options, defaultValue, onClick;

  let selectedValue = defaultValue;
  let selectedId = 0;
  let open = false;

  function closeDropdownList(){
    if(open){
      open = !open;
    }
  }
  function openDropdownList(){
    if(!open){
      open = !open;
    }
  }
  function toggleDropdownList(){
    open = !open;
  }

  function selectOption(event){
    if (onClick) {
      onClick(event);
    }
    selectedValue = event.currentTarget.value;
    selectedId = event.currentTarget.getAttribute("data-option-id");
    closeDropdownList();
  }
</script>

<div class="component">
  <div class="dropdown-container" role="button" use:clickOutside on:click_outside={closeDropdownList} tabindex="0" on:keydown={()=>{}}>
    <button class="options-selected" data-option-id={selectedId} value={selectedValue} on:click={() => toggleDropdownList(open)}>
      <img class='flag icon' src={options[selectedId].logo} alt='flag' title='flag'/>
      {options[selectedId].label}
      <span class="options-selected-arrow"/>
    </button>
    <div class="options-list {open ? "open" : ""}">
      {#each options as option}
        {#if selectedId != option.id}
        <button class="options-item {(option.value == selectedValue) ? "active" : ""}" data-option-id={option.id} value="{option.value}" on:click={(e)=> selectOption(e)}>
          {#if (option.logo)}
          <img class='flag icon' src={option.logo} alt='flag' title='flag'/>
          {/if}
          {option.label}
          <span class="option-tooltip">{option.locale}</span>
        </button>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  .component{
    --arrow-color:grey;
    --arrow-size:5px;
    --option-separator-color:grey;
    --tooltip-transition-delay:1s;
    --tooltip-transition-duration:2s;
    height: 100%;
    width: 100%;
  }
  /**
  * General elements
  */
  button{
    display: flex;
    height: 2.5em;
    width: 100%;
    min-height: 100%;
    align-items: center;
    text-align: start;
    border: none;
    padding-left: 0.5em;
  }
  .icon.flag{
    height: 20px;
    width: 32px;
    margin-right: 0.5em;
  }
  .options-selected-arrow{
    display: inline-block;
    height: var(--arrow-size);
    width: var(--arrow-size);
    position: absolute;
    right: 1em;
    border-right: solid var(--arrow-color);
    border-bottom: solid var(--arrow-color);
    transform: rotate(45deg);
  }
  /**
  */
  .dropdown-container{
    display:flex;
    flex-direction: column;
    width: 100%;
    min-width: 8em;
    max-width: 50%;
    position: absolute;
    top:12.5%;
    right:0.5em;
  }
  button.options-selected{
    position: relative;
    background-color: var(--background-primary);
    color: var(--text-primary);
    border-radius: 6px;
  }
  div.options-list{
    display: none;
    flex-direction: column;
    border-radius: 6px;
    width: 100%;
  }
  div.options-list.open{
    display:flex;
  }
  /**
  * Option item
  */
  button.options-item{
    width: 100%;
    background-color: var(--background-dropdown-primary);
    &:hover{
      background-color: var(--background-dropdown-hover-primary);
    }
    &:not(:last-child){
      border-bottom: solid var(--option-separator-color); 
      border-width: thin;
    }
    &:first-child{
      margin-top: 0.5em;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      border-width: thin;
    }
    &:last-child{
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
    &:nth-child(odd){
      background-color: var(--background-dropdown-secondary);
      &:hover{
        background-color: var(--background-dropdown-hover-primary);
      }
    }
  }
  button.options-item.active{
    background-color:var(--background-dropdown-active);
  }
  /**
  * Tooltip
  */
  .options-item:hover .option-tooltip{
    opacity: 1;
    transition: opacity;
    transition-delay:var(--tooltip-transition-delay);
    transition-timing-function: ease-in-out;
    transition-duration: var(--tooltip-transition-duration);
  }
  .option-tooltip{
    position: absolute;
    right:1em;
    /* margin-right: 1em; */
    opacity: 0;
    border: solid black;
  }
</style>