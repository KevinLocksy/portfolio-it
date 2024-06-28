<script>
  export let projectName, standfirst, summary, description, features, git_url, demo, stack, img;
  import {isDarkTheme} from '$store/theme.store.js';
  import SOCIAL_MEDIA from '$config/socialmedia.conf.json';

  let card;
  const nodeType_URL = "A";//html tag a

  let git_img ="";
  SOCIAL_MEDIA.forEach(socialMedia => {
    if (socialMedia.name === "Github"){
      git_img = socialMedia.img;
    }
  });

  /**
   * 
   */
  function flipCard(e){
    if (e.target.nodeName === nodeType_URL || e.target.parentNode.nodeName === nodeType_URL )
      return;

    const isTransformEmpty = typeof card.style.transform === "string" && card.style.transform.length === 0;
    card.style.transform = isTransformEmpty ? "rotateY(180deg)" : "";

    if(isTransformEmpty){
      card.classList.remove("animation");
    }else{
      card.classList.add("animation");
    }
  }
</script>

<div bind:this={card} class='component card animation' role='button' on:click={flipCard} on:keyup tabindex="0">
  <div class='card-container'>
    <div class='card-front'>
      <div class='card-inner'>
        <div class='card-img'>
          img {img}
        </div>
        <div class='card-body'>
          <h2 class='title'>
            <a href='{demo}' target='_blank'>
              {projectName}
            </a>
          </h2>
          <p class='standfirst'>{standfirst}</p>
          <p class='summary'>{summary}</p>
          <a class='git-link' href='{git_url}' target='_blank'>
            <img class="logo card" src={$isDarkTheme ? git_img.dark : git_img.light} alt="{git_url}" title="{git_url}">
          </a>
          <div class="stack" role="list">
            {#if stack}
              {#each stack as language}
                <div class="stackitem" role="listitem">
                  <span class="dot"/> {language}
                </div>
                {/each}
              {/if}
            </div>
          </div>
        </div>
    </div>
    <div class='card-back'>
      <div class='card-inner'>
        <div class='card-desc'>
          <h2>Description</h2>
          <p class='description'>{description}</p>
        </div>
        <div class='card-feat'>
          <h5>Features</h5>
          {#if features}
          <ul class='feature'>
              {#each features as feature}
              <li>{feature}</li>
              {/each}
            </ul>
          {/if}
        </div>
        <div class='card-link'>
          <a class='git-link' href='{git_url}' target='_blank'>
            <img class="logo card" src={$isDarkTheme ? git_img.dark : git_img.light} alt="{git_url}" title="{git_url}">
            <span>{git_url}</span>
          </a>
          <a class='demo-link' href='{demo}' target='_blank'>
            <img class="logo card" src={$isDarkTheme ? git_img.dark : git_img.light} alt="{git_url}" title="{git_url}">
            <span>{demo}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .component{
    --card-transform-duration:0.5s;
    --card-flip-duration:0.8s;
    --card-rotation-duration:3s;
    --card-rotation-iteration:2;
    --card-rotation-angle:30deg;
    --front-background-color: var(--card-background-primary,#110e2fe3);
    --front-border-color: var(--card-border-primary,#110e2fe3);
    --front-shadow-color: var(--card-shadow-primary,#110e2fe3);
    --back-background-color:var(--card-background-secondary,#17133ee3);
    --back-border-color: var(--card-border-secondary,#110e2fe3);
    --back-shadow-color: var(--card-shadow-secondary,#110e2fe3);
    --dot-shadow-primary: var(--card-dot-shadow-primary,rgba(0,255,182,0.5));
    --dot-shadow-secondary: var(--card-dot-shadow-secondary,rgba(0,255,135,1));
    font-family:var(--font-family-primary,initial);
    color:var(--card-font-color-primary,var(--text-primary));
  }
  h2{
    padding-top: unset;
  }
  p,li{
    font-size: small;
  }
  /**
  * Card
  */
  .card{
    position: relative;
    display: flex;
    height: 15em;
    width: 20em;
    cursor: pointer;
    transform-style: preserve-3d;
    transform-origin: center;
    transition: transform var(--card-flip-duration);
    perspective: 1000px;
  }
  .animation:hover{
    animation-name: rotation var(--card-rotation-duration) var(--card-rotation-iteration) linear forwards;
    -webkit-animation: rotation var(--card-rotation-duration) var(--card-rotation-iteration) linear forwards;
  }
  @keyframes rotation {
    25% { transform: rotateY(var(--card-rotation-angle)); }
    75% { transform: rotateY(- var(--card-rotation-angle)); }
  }
  /**
  * Card content
  */
  .card-container{
    position: relative;
    width: 100%;
    height: 100%;
    border: solid 1px var(--border-color-front);
    border-radius: 1em;
    box-shadow: 0px 10px 10px var(--shadow-color-front);
  }
  .card-front, .card-back{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .card-inner{
    display: flex;
    flex-direction: row;
    gap:1em;
    height:100%;
    margin: 1em;
  }
  .card-img{
    flex:1.5;
  }
  .card-body{
    flex:2;
  }
  /**
  * Front card content
  */
  .card-front{
    background-color: var(--front-background-color);
  }
  .card-body{
    display: flex;
    flex-direction: column;
  }
  /**
  * Back card content
  */
  .card-back{
    background-color: var(--back-background-color);
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
  .card-back>.card-inner{
    display: grid;
    grid-template-areas: 
      "desc feat"
      "link link";
  }
  /**Desc section*/
  .card-desc{
    grid-area: desc;
  }
  /**Features section*/
  .card-feat{
    grid-area: feat;
  }
  /**Link section*/
  .card-link{
    grid-area: link;
  }
  .card-link>*{
    display: flex;
    width:fit-content;
    margin: 0.5em 0;
    & > span{
      font-size: smaller;
      margin: 0 1em;
    }
  }
  /**
  * shining bullet points
  */
  .dot{
    display: inline-block;
    position: relative;
    content: '';
    text-align: end;
    top:-0.15em;
    background: rgba(255,255,255,1);
    height: 5px;
    width: 5px;
    box-shadow: inset 0px 0px 10px 2px var(--dot-shadow-primary),
                      0px 0px 10px 2px var(--dot-shadow-secondary);
    border-radius: 10px;
  }
  /**
  * stack
  */
  .stack{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position:absolute;
    bottom: 0;
    padding-bottom: 1em;
  }
  .stackitem{
    font-size: small;
    margin-right: 1em;
    bottom: 0;
  }
  /**
  * Content
  */
  .title{
    font-family: var(--font-family-quaternary);
    padding-bottom: 0.5em;
  }
  img.logo.card{
    height:1.5em;
    width: auto;
  }
</style>