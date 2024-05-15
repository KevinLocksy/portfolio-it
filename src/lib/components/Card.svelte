<script>
  export let projectName, summary, stack;
  /**
   * @type {HTMLElement}
   */
  let card;

  function flipCard(){
    const isTransformEmpty = typeof card.style.transform === "string" && card.style.transform.length === 0;
    card.style.transform = isTransformEmpty ? "rotateY(180deg)" : "";
  }

</script>

<div bind:this={card} class='card' role='button' on:click={flipCard} on:keyup tabindex="0">
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
  .card{
    position: relative;
    display: flex;
    height: 30vh;
    width: 45vh;
    padding:1em;
    margin:1em;
    border: solid 1px;
    border-radius: 1em;
    box-shadow: var(--box-shadow-secondary);
    background-color: var(--background-secondary);
    cursor: pointer;
    transform-style: preserve-3d;
    transform-origin: center;
    transition: transform 0.5s;
    perspective: 1000px;
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
    transition: transform 0.6s;
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