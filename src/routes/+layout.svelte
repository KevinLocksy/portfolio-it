<script>
  import {i18n} from '$utils/i18n.utils.js';
  import {toggleTheme} from '$utils/theme.utils.js';
  import {i18nStore} from '$store/i18n.store.js';
  import {isDarkTheme} from '$store/theme.store.js';
  import SOCIAL_MEDIA from '$config/socialmedia.conf.json';
  import LoadingPage from './loadingPage.svelte';

  import PERSONAL_INFO from '$config/personalInfo.conf.json';
  import LANG from "$config/i18n.conf.json";
	import DropdownList from '$components/DropdownList.svelte';

  const LOGO = PERSONAL_INFO.logo;
  const CREATION_DATE = PERSONAL_INFO.date_creation;
  const currentYear = (new Date()).getFullYear();
  const LANGUAGE = LANG.language;

  const onLangChange = async (e) => {
    const newLang = e.target.value;
    await i18n.switchLang(newLang);
  }
</script>

{#await i18n.init()}
  <LoadingPage/>
{:then _}
  <header>
    <div id='trademark'>
      <div id='color-scheme' role='button' on:click={toggleTheme} on:keyup tabindex="0">
        <img class='logo locksy' src={isDarkTheme? LOGO.img.dark : LOGO.img.light} alt='{LOGO.alt}' title='{LOGO.title}' />
      </div>
      <h1 class='title'>{PERSONAL_INFO.pseudo} - IT Portfolio</h1>
    </div>

    <div id='lang-dropdown'>
      <DropdownList options={LANGUAGE} defaultValue={$i18nStore} onClick={onLangChange}/>
    </div>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <h4 id='credits'>{$i18n.footer.credits}</h4>
    <div id='contact'>
      {#each SOCIAL_MEDIA as { url, img, alt, title }}
          <a href={url}>
            <img class='logo highlight contact' src={$isDarkTheme ? img.dark : img.light} alt='{alt}' title='{title}' />
          </a>
      {/each}
    </div>
    <h4 id='date'>{CREATION_DATE}{#if currentYear.toString()!=CREATION_DATE} - {currentYear}{/if}</h4>
  </footer>
{/await}

<style>
  header, footer{
    max-width:100%;
    min-height:50px;
    align-items: center;
    box-shadow: 0px 1px 5px var(--box-shadow-primary);
    background-color: var(--background-secondary);
    padding: 0.5em 1em;
    z-index:var(--z-index-main-header);
  }
  @media screen and (max-width:28em){
    header{
      padding: 0.5em 0.4em;
    }
  }
  
  /**
  * Structure
  */
  header{
    display: flex;
    justify-content:space-between;
    position: sticky;
    top:0;
    max-height:65px;
  }
  main{
    flex:auto;
  }
  footer{
    display: grid;
    grid-template-areas: "credits contact date";
    grid-template-columns: repeat(3,1fr);
    position: sticky;
    bottom:0;
  }
  /**
  * Header elements
  */
  div#trademark{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  div#color-scheme{
    cursor: pointer;
  }
  div#lang-dropdown{
    position: relative;
    height: inherit;
    width: clamp(3em,4em + 10vw,15em);
  }
  /**
  * Footer elements
  */
  footer>*{
    /** To be generic */
    &:first-child{
      grid-column: 1;
      grid-area: credits;
    }
    &:nth-child(2){
      grid-column: 2;
      grid-area: contact;
      justify-self: center;
    }
    &:last-child{
      grid-column: 3;
      grid-area: date;
      justify-self: end;
    }
  }
  #contact{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1em;
  }
  .logo.contact{
    width: 25px;
  }
  @media screen and (max-width:28em){
    #contact{
      gap: 0.5em;
    }
  }
</style>