<svelte:head>
  <title>Kevin Locksy - IT Portfolio</title>
  <meta name="description" content="Kevin Locksy - Official IT Portfolio."/>
</svelte:head>

<script>
  import Card from '$components/Card.svelte';
  import SOCIAL_MEDIA from '$lib/config/socialmedia.conf.json';
  import PERSONAL_INFO from '$lib/config/personalInfo.conf.json';
  import TECH_STACK from '$config/techStack.conf.json';
  import LANG from "$lib/config/i18n.conf.json";
  import {setCursorPositions} from '$utils/cursor.utils.js';
  import {toggleTheme} from '$utils/theme.utils.js';
  import {isDarkTheme} from '$store/theme.store.js';
  import {i18n} from '$utils/i18n.utils.js';
  import {i18nStore} from '$store/i18n.store.js';

  const LOGO = PERSONAL_INFO.logo;
  const LANGUAGE = LANG.language;
  //https://svelte.dev/repl/de39de663ef2445b8fe17b79c500013b?version=3.33.0 i18n
  //https://codepen.io/davidkpiano/pen/gOoNZNe halo cursor
  //https://threejs.org/docs/index.html#manual/en/introduction/Installation 3D

  setCursorPositions();
  const onLangChange = async () => {
    await i18n.switchLang();
  }

</script>

  <header>
    <div>
      <div class='btn-dark-mode' role='button' on:click={toggleTheme} on:keyup tabindex="0">
        <img class='logo locksy' src={isDarkTheme? LOGO.img.dark : LOGO.img.light} alt='{LOGO.alt}' title='{LOGO.title}' />
      </div>
      <div class='pseudo'>
        <h1>{PERSONAL_INFO.pseudo}</h1>
      </div>
    </div>

    <div>
      <div>3D</div>
      <div>
        <select on:change={onLangChange} name="lang" id="lang">
          {#each LANGUAGE as {locale,code}}
            <option value={code} selected={code == $i18nStore ? "selected" : ""}>{locale}</option>
          {/each}
        </select>

      </div>

    </div>
  </header>


  <main>
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
      <div id='pres-img'> 3D thing</div>
    </div>

    <div id="techStack">
      <h2>{@html $i18n.techStack.desc}</h2>
      <div id="techStack-list">
        {#each TECH_STACK.techStack as {name, img}}
          <div class="techStack-logo-container"  name='{name}'>
            <img class='techStack-logo-img logo' src={img.path} alt='{img.alt}' title='{img.title}' />
            <h4 class="techStack-logo-caption">{name}</h4>
          </div>
        {/each}
      </div>
    </div>
    <div id="projects">
      <Card></Card>
      <Card></Card>
    </div>
  </main>

  <footer>
    <!-- {$i18n.pres.title} -->
  </footer>
<style>
  @import url("./styles.css");

  header, footer{
    display: flex;
    width:100%;
    height:50px;
    align-items: center;
  }
  header{
    position: fixed;
    justify-content:space-between;
    z-index: 999;/* this is odd*/
  }
  header > *{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  main{
    display:grid;
    grid-template-rows: 2fr 1fr 3fr 3fr;
    position: relative;
    width: 100%;
  }
  footer{
    justify-content: center;
  }
  
  #presentation, #techStack, #projects {
    display:grid;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  #presentation{
    grid-row: 1;
    position: relative;
    top:30%;
    grid-template-columns: 3fr 4fr 3fr 3fr;
  }
  #pres-desc{
    grid-column: 2;
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
  
  #pres-img{
    grid-column: 3;
  }
  
  #techStack{
    grid-row: 2;
    position: relative;
    flex-direction: column;
  }
  #techStack-list{
    display: flex;
  }
  .techStack-logo-container{
    position: relative;
    height: fit-content;
    margin: 1rem;
  }
  
  /* background halo: position + height + width mandatory in the transition */
  .techStack-logo-container::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 110%;
    background: radial-gradient(closest-side, var(--background-halo-primary), transparent);
    opacity: 0;
    z-index: -1;
    transition: opacity var(--logo-transition-duration) ;
  }
  .techStack-logo-container:hover::before {
    opacity: 1;
  }
  
  /* shadow  */
  .techStack-logo-container::after{
    content: "";
    position: absolute;
    height: 1rem;
    width: 4rem;
    left:0.13rem;
    background: var(--shadow-primary);
    border-radius: 100%;
    filter: blur(6px);
    z-index: -1;
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

  #projects{
    grid-row: 3;
    flex-direction: row;
  }

</style>