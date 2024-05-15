<svelte:head>
  <title>Kevin Locksy - IT Portfolio</title>
  <meta name="description" content="Kevin Locksy - Official IT Portfolio."/>
</svelte:head>

<script>
  import Card from '$components/Card.svelte';
  import {constants_socialMedia} from '$constants/socialmedia.js';
  import {constants_personalInfo} from '$constants/personalInfo.js';
  import {toggleTheme} from '$utils/theme.js';
  import {theme} from '$store/store.js';

  const PERSONAL_INFO = constants_personalInfo.personalInfo;
  const LOGO = PERSONAL_INFO.logo;
  const SOCIAL_MEDIA = constants_socialMedia.socialmedia;
  //https://svelte.dev/repl/de39de663ef2445b8fe17b79c500013b?version=3.33.0 i18n
  //https://codepen.io/davidkpiano/pen/gOoNZNe halo cursor
  //https://threejs.org/docs/index.html#manual/en/introduction/Installation 3D
</script>

<header>
  <div>
    <div class='btn-dark-mode' role='button' on:click={toggleTheme} on:keyup tabindex="0">
      <img class='logo locksy' src={$theme =="light" ? LOGO.img.light : LOGO.img.light} alt='{LOGO.alt}' title='{LOGO.title}' />
    </div>
    <div class='pseudo'>
      <h1>{PERSONAL_INFO.pseudo}</h1>
    </div>
  </div>

  <div>
    <div>3D</div>
    <div>language</div>
    {#each SOCIAL_MEDIA as { url, img, alt, title }}
      <div class="socialMedia">
        <a href={url}>
          <img class='logo' src={$theme =="light" ? img.light : img.dark} alt='{alt}' title='{title}' />
        </a>
      </div>
    {/each}
  </div>
</header>


<main>
  <div id="presentation">
    <div id='pres-desc'>
      <p> Hello I am blah blah</p>
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
  image artist vs tech man
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