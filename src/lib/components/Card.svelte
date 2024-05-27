<script>
  export let project, standfirst, summary, git, stack, img;
  let card;
  const nodeType_URL = "A";

  /**
   * 
   */
  function flipCard(e){
    if (e.target.nodeName === nodeType_URL)
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
          <h2 class='title'>{project}</h2>
          <h4 class='standfirst'>{standfirst}</h4>
          <p class='standfirst'>{summary}</p>
          <a class='git-link' href='{git}' target='_blank'>{git} or git logo</a>
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
          <h2>description</h2>
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
        </div>
        <div class='card-body'>
          <div>
            git
          </div>
          <div>
            demo: website
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .component{
    --card-transform-duration:0.5s;
    --card-flip-duration:0.4s;
    --card-rotation-duration:1s;
    --card-rotation-angle:30deg;
  }
  /**
  * Card
  */
  .card{
    position: relative;
    display: flex;
    height: 30vh;
    width: 25vw;
    box-shadow: 0px 10px 10px var(--card-shadow-primary);
    cursor: pointer;
    transform-style: preserve-3d;
    transform-origin: center;
    transition: transform var(--card-flip-duration);
    perspective: 1000px;
  }
  .animation:hover{
    animation-name: rotation var(--card-rotation-duration) infinite linear forwards;
    -webkit-animation: rotation var(--card-rotation-duration) infinite linear forwards;
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
    border: solid 1px var(--card-border-primary);
    border-radius: 1em;
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
    height:100%;
    margin: 1em;
  }
  .card-img{
    flex:1;
  }
  .card-body{
    flex:2;
  }
  /**
  * Front card content
  */
  .card-front{
    background-color: var(--card-background-primary);
  }
  .card-body{
    display: flex;
    flex-direction: column;
  }
  /**
  * Back card content
  */
  .card-back{
    background-color: pink;
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
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
    box-shadow: inset 0px 0px 10px 2px var(--card-shadow-secondary),
                      0px 0px 10px 2px var(--card-shadow-third);
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
    padding-bottom: 0.5em;
  }
  .git-link{
    width:fit-content;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
</style>