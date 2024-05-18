<script>
  import {i18n} from '$utils/i18n.utils.js';
</script>

{#await i18n.init()}
  <div>wait</div>
{:then _}
  <slot />
{/await}