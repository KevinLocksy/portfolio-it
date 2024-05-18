<svelte:head>
  <title>Kevin Locksy - IT Portfolio</title>
  <meta name="description" content="Kevin Locksy - Official IT Portfolio."/>
</svelte:head>

<script>
  import Card from '$components/Card.svelte';
  import SOCIAL_MEDIA from '$lib/config/socialmedia.conf.json';
  import PERSONAL_INFO from '$lib/config/personalInfo.conf.json';
  import LANG from "$lib/config/i18n.conf.json";
  import {toggleTheme} from '$utils/theme.utils.js';
  import {isDarkTheme} from '$store/theme.store.js';
  import {i18n} from '$utils/i18n.utils.js';
  import {i18nStore} from '$store/i18n.store.js';

  const LOGO = PERSONAL_INFO.logo;
  const LANGUAGE = LANG.language;
  //https://svelte.dev/repl/de39de663ef2445b8fe17b79c500013b?version=3.33.0 i18n
  //https://codepen.io/davidkpiano/pen/gOoNZNe halo cursor
  //https://threejs.org/docs/index.html#manual/en/introduction/Installation 3D

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
      <p> {$i18n.pres.title}</p>
      <p> {$i18n.pres.desc}</p>
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
    Stack
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
  header, footer{
    display: flex;
    width:100%;
    height:50px;
    align-items: center;
  }
  header{
    position: fixed;
    top: 0;
    justify-content:space-between;
  }
  header > *{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  main{
    margin-top:50px;
    width: 100%;
  }
  footer{
    position: fixed;
    bottom: 0;
    justify-content: center;
  }
  
  .logo, .socialMedia {
    height: 50px;
    width:50px;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
  .btn-dark-mode{
    cursor: pointer;
  }
  .logo.locksy{
    border-radius: 50px;
  }

  #presentation{
    display:grid;
    grid-template-columns: 3fr 4fr 3fr 3fr;
    height:30vh;
    width:(100% - 2em);
    padding: 2em;
  }
  #pres-desc{
    grid-column: 2;
  }
  #pres-desc-social{
    display: flex;
    flex-direction: row;
  }

  #pres-img{
    grid-column: 3;
  }

  #techStack{
    height:10vh;
    display: flex;
    justify-content: center;
  }
  #projects{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

</style>