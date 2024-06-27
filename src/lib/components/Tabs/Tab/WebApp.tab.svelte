<script>
  import Card from '$components/Card.svelte';
  import Projects from '$assets/projects/webapp/webapp.projects.json';
  const webapps = Projects.webapp;
</script>
<div class="tab">
  {#each webapps as webapp}
    <Card project={webapp.project} standfirst={webapp.standfirst} summary={webapp.summary} description={webapp.description} features={webapp.features} git_url={webapp.git} demo={webapp.git} stack={webapp.stack} img={webapp.img}/>
  {/each}
</div>

<style>
  @import './tab.styles.css';
</style>