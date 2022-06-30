<script>
  import { getContext } from "svelte";
  import { BOUNDING_BOX_CONTEXT } from "./stores.js";
  import { boundingBoxToInset } from "./utils/boundingBox";

  /**
   * @typedef {import("svelte/store").Writable}
   */

  /**@type {string}*/
  export let name;

  const boundingBoxes = getContext(BOUNDING_BOX_CONTEXT);
  /**@type {Writable<BoundingBox>}*/
  $: bb = boundingBoxes[name];
  $: inset = boundingBoxToInset($bb);
</script>

{#if inset !== undefined}
  <section style={`inset: ${inset}; position: absolute;`}>
    <slot />
  </section>
{/if}
