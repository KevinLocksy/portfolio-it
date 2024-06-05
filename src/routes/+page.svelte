<svelte:head>
  <title>Kevin Locksy - IT Portfolio</title>
  <meta name="description" content="Kevin Locksy - Official IT Portfolio."/>
</svelte:head>

<script>
  import SOCIAL_MEDIA from '$config/socialmedia.conf.json';
  import PERSONAL_INFO from '$config/personalInfo.conf.json';
  import TECH_STACK from '$config/techStack.conf.json';
  import LANG from "$config/i18n.conf.json";
  import {setCursorPositions} from '$utils/cursor.utils.js';
  import {typeText} from '$utils/textTyper.utils.js';
  import {toggleTheme} from '$utils/theme.utils.js';
  import {isDarkTheme} from '$store/theme.store.js';
  import {i18n} from '$utils/i18n.utils.js';
  import {i18nStore} from '$store/i18n.store.js';
  import Tabs from '$components/Tabs/Tabs.svelte';
  import Model3d from '$components/Model3d/Model3d.svelte';
	import DropdownList from '$components/DropdownList.svelte';
  const LOGO = PERSONAL_INFO.logo;
  const LANGUAGE = LANG.language;
  //https://svelte.dev/repl/de39de663ef2445b8fe17b79c500013b?version=3.33.0 i18n
  //https://codepen.io/davidkpiano/pen/gOoNZNe halo cursor
  //https://threejs.org/docs/index.html#manual/en/introduction/Installation 3D

  setCursorPositions();
  const onLangChange = async (e) => {
    const newLang = e.target.value;
    await i18n.switchLang(newLang);
  }
</script>

<header>
  <div id='trademark'>
    <div class='color-scheme' role='button' on:click={toggleTheme} on:keyup tabindex="0">
      <img class='logo locksy' src={isDarkTheme? LOGO.img.dark : LOGO.img.light} alt='{LOGO.alt}' title='{LOGO.title}' />
    </div>
    <h1 class='title'>{PERSONAL_INFO.pseudo} - IT Portfolio</h1>
  </div>

  <div class='lang-dropdown'>
    <DropdownList options={LANGUAGE} defaultValue={$i18nStore} onClick={onLangChange}/>
  </div>
</header>
  
<main>
  <div id='main-wrapper'> <!-- wrapper if i want to make a component out of it: it is easier for the css, etc-->
    <section id="presentation">
      <div id='pres-desc'>
        <div id='pres-desc-text'>
          <p> {@html $i18n.pres.title}</p>
          <p> {@html $i18n.pres.desc}</p>
        </div>
        <div id="pres-desc-social">
          {#each SOCIAL_MEDIA.socialmedia as { url, img, alt, title }}
            <div class="socialMedia">
              <a href={url}>
                <img class='logo' src={$isDarkTheme ? img.dark : img.light} alt='{alt}' title='{title}' />
              </a>
            </div>
          {/each}
        </div>
      </div>
      <div id='pres-3d'>
        <Model3d />
      </div>
    </section>
    
    <section id="techStack">
      <div id="techStack-wrapper">
        <h2 use:typeText class="font-tech">{$i18n.techStack.desc}</h2>
        <div id="techStack-list">
          {#each TECH_STACK.techStack as {name, img}}
          <div class="techStack-logo-container"  name='{name}'>
            <img class='techStack-logo-img logo' src={img.path} alt='{img.alt}' title='{img.title}' />
            <h4 class="techStack-logo-caption">{name}</h4>
          </div>
          {/each}
        </div>
      </div>
    </section>

    <section id="projects">
      <Tabs />
    </section>

    <section id="art">
      
    </section>
  </div>
</main>

  <footer>
    <h4 id='credits'>{$i18n.footer.credits}</h4>
    <h4 id='contact'>{$i18n.footer.contact}</h4>
    <h4 id='date'>Date</h4>
  </footer>

<style>
  /* @import url("./styles.css"); */
  header, footer{
    max-width:100%;
    min-height:50px;
    align-items: center;
    box-shadow: 0px 1px 5px var(--box-shadow-primary);
    padding: 0 1em;
  }
  section{
    margin: 1em;
  }
  /**
  * Structure
  */
  header{
    display: flex;
    justify-content:space-between;
    position: sticky;
    top:0;
    z-index: 999;
  }
  main{
    background: radial-gradient(
      800px circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
      var(--background-halo-cursor-primary),
      transparent 90%
      );
  }
  footer{
    display: grid;
    grid-template-areas: "credits contact date";
    grid-template-columns: repeat(3,1fr);
  }
  /**
  * Header elements
  */
  div#trademark{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  h1.title{
    margin: 0 0.5em;
  }
  div.color-scheme{
    cursor: pointer;
  }
  div.lang-dropdown{
    position: relative;
    height: inherit;
    width: 200px;
  }
  /**
  * Footer elements
  */
  h4#credits{
    grid-area: credits;
  }
  h4#contact{
    grid-area: contact;
    justify-self: center;
  }
  h4#date{
    grid-area: date;
    justify-self: end;
  }
  /**
  * Main
  */
  #main-wrapper{
    margin: 0 auto;
    max-width: 1440px;
  }
  /**
  * Logo
  */
  .logo, .socialMedia {
    max-height: 50px;
    max-width: 50px;
  }
  .socialMedia {
    margin: 0 0.5em;
  }
  .logo.locksy{
    border-radius: 50px;
  }
  /**
  * Presentation section
  */
  section#presentation{
    min-height: 355px;
    align-items: center;
    display: flex;
    flex-flow: row wrap-reverse;
  }
  #pres-desc{
    min-width:25em;/**need to use clamp*/
    max-width:45em;/**need to use clamp*/
    flex:1;
    padding: 1rem;
    margin:0 3rem;
  }
  #pres-desc-text{
    padding: 1rem;
    text-align: justify;
    text-justify: inter-character;
  }
  #pres-desc-social{
    display: flex;
    flex-direction: row;
    padding: 1em;
  }
  #pres-3d{
    min-width:25em;/**need to use clamp*/
    flex:1;
    margin:0 auto;
  }
  /**
  * TechStack section
  */
  section#techStack{
    min-height: 200px;
  }
  /**necessary because the "flex-direction" is column to have the child elements in the same width*/
  #techStack-wrapper{
    width: fit-content;
    margin: 0 auto;
    padding: 1em;
  }
  #techStack-list{
    display: flex;
    flex-flow: row wrap;
  }
  .techStack-logo-container{
    position: relative;
    max-height: fit-content;
    margin: 1rem;
    &::before, &::after{
      content: "";
      position: absolute;
    }
    /* ::before = background halo-logo: (position,height,width) mandatory in the transition. init in public/styles/styles.css */
    &::before {
      width: 100%;
      height: 110%;
      background: radial-gradient(closest-side, var(--background-halo-logo-primary), transparent);
      transition: opacity var(--logo-transition-duration) ;
      opacity: 0;
      z-index: -1;
    }
    &:hover::before {
      opacity: 1;
    }
    /* ::after = shadow on the ground: (position,height,width) mandatory. init in public/styles/styles.css  */
    &::after{
      height: 1rem;
      width: 4rem;
      left:0.13rem;
      background: var(--shadow-logo-primary);
      filter: blur(6px);
      border-radius: 100%;
    }
  }
  .techStack-logo-caption{
    position: absolute;
    height: max-content;
    width: 100%;
    text-align: center;
    font-style: italic;
    color:var(--logo-caption-primary);
    opacity: 0;
    transition: opacity var(--logo-transition-duration) linear;
  }
  .techStack-logo-container:hover .techStack-logo-caption {
    opacity: 1;
  }
  .font-tech {
    font-family: 'Technology', sans-serif;
  }
  /**
  * Projects section
  */
  section#projects{
    min-height: 400px;
    display: flex;
    justify-content: center;
    padding: 2em;
  }
  /**
  * Artistic section
  */
  section#art{
    min-height: 400px;
  }
</style>