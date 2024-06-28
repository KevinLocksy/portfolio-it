<script>
  import {clickOutside} from '$utils/node.utils.js';
  export let options, defaultValue, onClick;

  let selectedValue = defaultValue;
  let selectedId = 0;
  options.forEach(option => {
    if (option.value === defaultValue){
      selectedId = option.id;
    }
  });

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
    console.log("options[selectedId]=",options[selectedId])
    closeDropdownList();
  }
</script>

<div class="component">
  <div class="dropdown-container" role="button" use:clickOutside on:click_outside={closeDropdownList} tabindex="0" on:keydown={()=>{}}>
    <button class="options-selected" data-option-id={selectedId} value={selectedValue} on:click={() => toggleDropdownList(open)}>
      <img class='flag icon' src={options[selectedId].logo} alt='{options[selectedId].value}' title='{options[selectedId].label}'/>
      <span class="size-l">{options[selectedId].label}</span>
      <span class="options-selected-arrow"/>
    </button>
    <div class="options-list" class:open>
      {#each options as option}
        {#if selectedId != option.id}
        <button class="options-item" data-option-id={option.id} value="{option.value}" on:click={(e)=> selectOption(e)}>
          {#if (option.logo)}
          <img class='flag icon' src={option.logo} alt='{option.value}' title='{option.label}'/>
          {:else}
          <span>{option.label}</span>
          {/if}
          <span class="size-l">{option.label}</span>
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
    --option-separator-color:#232121;
    --tooltip-transition-delay:1s;
    --tooltip-transition-duration:2s;
    --button-height:2.5em;
    --min-width:5em;
    --max-width:10em;
    --flag-height:20px;
    --flag-width:32px;
    --border-radius:6px;
    --text-color-primary: var(--text-color-dropdown-primary,#ffffffff);
    --background-primary: var(--background-dropdown-primary, #0c0e1bfc);
    --background-secondary: var(--background-dropdown-secondary, #191d3afc);
    --background-hover-primary: var(--background-dropdown-hover-primary, #0c0e1bfc);
    --font-family:var(--font-family-dropdown,initial);
    height: 100%;
    width: 100%;
    min-width: minmax(fit-content,var(--min-width));
  }
  /**
  */
  .dropdown-container{
    display:flex;
    flex-direction: column;
    min-width: minmax(fit-content,var(--min-width));
    max-width: var(--max-width);
  }
  button.options-selected{
    position: relative;
    background-color: var(--background-primary);
    color: var(--text-primary);
    border: solid 1px var(--option-separator-color);
    border-width: thin;
    border-radius: var(--border-radius);
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
  div.options-list{
    position: absolute;
    display: none;
    flex-direction: column;
    border-radius: var(--border-radius);
    border: solid 1px var(--option-separator-color);
    border-width: thin;
    top:var(--button-height);
    max-width: var(--max-width);
  }
  div.options-list.open{
    display:flex;
  }
  /**
  * Option item
  */
  button.options-item{
    width: 100%;
    background-color: var(--background-primary);
    &:hover{
      background-color: var(--background-hover-primary);
    }
    &:not(:last-child){
      border-bottom: solid var(--option-separator-color);
      border-width: thin;
    }
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
      border-width: thin;
    }
    &:last-child{
      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:nth-child(odd){
      background-color: var(--background-secondary);
      &:hover{
        background-color: var(--background-hover-primary);
      }
    }
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
  /**
  * Responsive
  */
  @media screen and (max-width:30em){
    .size-l{
      display: none;
    }
    button,button.options-item{
      width:calc(var(--flag-width) + 12vw);
    }
  }
  /**
  * General elements
  */
  button{
    display: flex;
    height: var(--button-height);
    min-width: minmax(fit-content,var(--min-width));
    min-height: 100%;
    align-items: center;
    text-align: start;
    color:var(--text-color-primary);
    border: none;
    padding-left: 0.5em;
    font-family: var(--font-family);
  }
  .icon.flag{
    height: var(--flag-height);
    width: var(--flag-width);
    margin-right: 0.5em;
  }
</style>