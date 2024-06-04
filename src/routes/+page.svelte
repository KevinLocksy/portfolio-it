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
  <div>
    <div class='color-scheme' role='button' on:click={toggleTheme} on:keyup tabindex="0">
      <img class='logo locksy' src={isDarkTheme? LOGO.img.dark : LOGO.img.light} alt='{LOGO.alt}' title='{LOGO.title}' />
    </div>
    <div class='pseudo'>
      <h1>{PERSONAL_INFO.pseudo} - IT Portfolio</h1>
    </div>
  </div>

  <div class='lang-dropdown'>
    <DropdownList options={LANGUAGE} defaultValue={$i18nStore} onClick={onLangChange}/>
  </div>
</header>
  
<main>
  <div id='main-wrapper'> <!-- wrapper if i want to make a component out of it: it is easier for the css, etc-->
    <div id="presentation">
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
    </div>
    
    <div id="techStack">
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
    </div>

    <div id="projects">
      <Tabs />
    </div>

    <div id="art">
      
    </div>
  </div>
</main>

  <footer>
    
  </footer>
<style>
  @import url("./styles.css");
  header, footer{
    display: flex;
    width:100%;
    min-height:50px;
    align-items: center;
    box-shadow: 0px 1px 5px var(--box-shadow-primary);
  }
  /**
  * Structure
  */
  header{
    position: sticky;
    top:0;
    justify-content:space-between;
    z-index: 999;/* this is odd*/
    &>*{
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
  main{
    background: radial-gradient(
      800px circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
      var(--background-halo-cursor-primary),
      transparent 90%
      );
  }
  footer{
    justify-content: center;
  }
  /**
  * Header elements
  */
  div.color-scheme{
    cursor: pointer;
  }
  div.lang-dropdown{
    position: relative;
    height: inherit;
    width: 200px;
  }
  /**
  * Main
  */
  #main-wrapper{
    margin: 0 auto;
    max-width: 1440px;
  }
  #presentation, #techStack, #projects {
    align-content: center;
    margin: 0 auto;
    width: 100%;
  }
  /**
  * Presentation section
  */
  #presentation{
    min-height: 355px;
    align-items: center;
    display: flex;
    flex-direction: row;
  }
  #pres-desc{
    flex:1;
    padding: 1em;
    margin:0 3rem;
  }
  #pres-desc-text{
    padding: 1em;
    text-align: justify;
    text-justify: inter-character;
  }
  #pres-desc-social{
    display: flex;
    flex-direction: row;
    padding: 1em;
  }
  #pres-3d{
    flex:1;
    margin:0 auto;
  }
  /**
  * TechStack section
  */
  #techStack{
    min-height: 200px;
  }
  /**necessary because the "flex-direction" is column to have the child elements in the same width*/
  #techStack-wrapper{
    width: fit-content;
    margin: 0 auto;
  }
  #techStack-list{
    display: flex;
    flex-direction: row;
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
  #projects{
    min-height: 400px;
  }
  /**
  * Artistic section
  */
  #art{
    min-height: 400px;
  }
</style>