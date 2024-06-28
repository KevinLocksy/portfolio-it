<script>
  import Card from '$components/Card.svelte';
  import {i18n} from '$utils/i18n.utils.js';
  $: webapps = $i18n.webapp;
</script>

<div class="tab">
  {#each webapps as webapp}
    <Card projectName={webapp.project} standfirst={webapp.standfirst} summary={webapp.summary} description={webapp.description} features={webapp.features} git_url={webapp.git} demo={webapp.demo} stack={webapp.stack} img={webapp.img}/>
  {/each}
</div>

<style>
  @import './tab.styles.css';
</style>