<script>
  import { getContext } from "svelte";
  import { INSET_CONTEXT } from "./stores.js";
  import {boundingBoxToInset} from './utils/boundingBox'

  /**
   * @typedef {import("svelte/store").Writable}
  */

  /**@type {string}*/
  export let name;

  const insets = getContext(INSET_CONTEXT);
  /**@type {Writable<BoundingBox>}*/
  $: inset = insets[name];
  $: css = boundingBoxToInset($inset);
</script>

{#if inset !== undefined}
  <section style={`inset: ${css}; position: absolute;`}>
    <slot />
  </section>
{/if}
