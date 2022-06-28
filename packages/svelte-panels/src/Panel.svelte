<script>
  import { getContext } from "svelte";
  import { INSET_CONTEXT } from "./stores.js";

  /**@type {string}*/
  export let name;

  const insets = getContext(INSET_CONTEXT);
  $: inset = insets[name];
</script>

{#if inset !== undefined}
  <section style={`inset: ${$inset}; position: absolute;`}>
    <slot />
  </section>
{/if}
