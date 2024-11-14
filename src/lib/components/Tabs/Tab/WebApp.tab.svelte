<script>
	import Card from '$components/Card.svelte';
	import { i18n } from '$utils/i18n.utils.js';
	$: webapps = $i18n.webapp;
</script>

<div class="tab">
	{#each webapps as app}
		<Card
			projectName={app.project}
			standfirst={app.standfirst}
			summary={app.summary}
			description={app.description}
			features={app.features}
			git_url={app.git}
			url={app.url}
			stack={app.stack}
			img={app.img}
		/>
	{/each}
</div>

<style>
	@import './tab.styles.css';
</style>
