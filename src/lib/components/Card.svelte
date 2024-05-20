<script>
  export let projectName, summary, stack;
  /**
   * @type {HTMLElement}
   */
  let card;

  /**
   * 
   */
  function flipCard(){
    const isTransformEmpty = typeof card.style.transform === "string" && card.style.transform.length === 0;
    card.style.transform = isTransformEmpty ? "rotateY(180deg)" : "";

    if(isTransformEmpty){
      card.classList.remove("animation");
    }else{
      card.classList.add("animation");
    }
  }

</script>

<div bind:this={card} class='container card animation' role='button' on:click={flipCard} on:keyup tabindex="0">
  <div class='card-inner'>
    <div class='card-front'>
      <div class='card-img'>
        image
      </div>
      <div class='card-body'>
        <h2>{projectName}</h2>
        <p>{summary}</p>
        <a href='/#'>git link</a>
        <p>{stack}</p>
      </div>
    </div>
    <div class='card-back'>
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

<style>
  .container{
    --card-transform-duration:0.5s;
    --card-flip-duration:0.4s;
    --card-rotation-duration:1s;
    --card-rotation-angle:30deg;
  }
  .card{
    position: relative;
    display: flex;
    height: 30vh;
    width: 45vh;
    padding:1em;
    margin:1em;
    border: solid 1px var(--card-border-primary);
    border-radius: 1em;
    box-shadow: 0px 10px 10px var(--card-shadow-primary);
    background-color: var(--card-background-primary);
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
  .card-inner{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .card-front, .card-back{
    display:flex;
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .card-back{
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
  .card-front > *, .card-back > *{
    flex:1;
  }
</style>