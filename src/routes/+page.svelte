<svelte:head>
  <title>Kevin Locksy - IT Portfolio</title>
  <meta name="description" content="Kevin Locksy - Official IT Portfolio."/>
</svelte:head>

<script>
  import SOCIAL_MEDIA from '$config/socialmedia.conf.json';
  import TECH_STACK from '$config/techStack.conf.json';
  import {setCursorPositions} from '$utils/cursor.utils.js';
  import {typeText} from '$utils/textTyper.utils.js';
  import {isDarkTheme} from '$store/theme.store.js';
  import {i18n} from '$utils/i18n.utils.js';
  import Tabs from '$components/Tabs/Tabs.svelte';
  import Model3d from '$components/Model3d/Model3d.svelte';

  setCursorPositions();
</script>

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
      <h2 use:typeText>{$i18n.techStack.desc}</h2>
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

<style>
  /**
  * Main
  */
  #main-wrapper{
    margin: 0 auto;
    max-width: 1440px;
  }
  section{
    margin: 1em;
  }
  /**
  * Presentation section
  */
  section#presentation{
    min-height: 355px;
    display: flex;
    align-items: center;
    flex-flow: row wrap-reverse;
  }
  #pres-desc{
    flex: 2;
    max-width:35em;
    margin: 1em clamp(1em,5vw,8em);
    background-color: var(--background-third);
    box-shadow: 0 0 15px 10px var(--background-third);
  }
  #pres-desc-text{
    padding: 1em clamp(1em,10vw,3em);
    text-align: justify;
    text-justify: inter-character;
  }
  #pres-desc-social{
    display: flex;
    flex-direction: row;
    padding: 1em;
  }
  #pres-3d{
    flex: 1;
    display: flex;
    justify-content:center;
    padding: 1em 0;
  }
  /**
  * TechStack section
  */
  section#techStack{
    min-height: 200px;
    font-family: var(--font-family-tercery);
  }
  /**necessary because the "flex-direction" is column to have the child elements in the same width*/
  #techStack-wrapper{
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
    margin: calc(0.5rem + 1vw);
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
      width: clamp(15px,15px + 5vw,50px);
      height: 1rem;
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
    z-index: 1;
  }
  /**
  * Projects section
  */
  section#projects{
    min-height: 400px;
    display: flex;
    justify-content: center;
    padding: 1em;
  }
  /**
  * Artistic section
  */
  section#art{
    min-height: 400px;
  }
</style>