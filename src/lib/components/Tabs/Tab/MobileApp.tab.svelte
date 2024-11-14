<script>
	import Card from '$components/Card.svelte';
	import { i18n } from '$utils/i18n.utils.js';
	$: mobile = $i18n.mobile;
</script>

<div class="tab">
	{#each mobile as app}
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
