<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { INSET_CONTEXT } from "./stores";
  /** @typedef {import("./types").GridState}*/

  /** @type {GridState} */
  export let grid;

  const insets = {
    "panel-1": writable("0% 50% 0% 0%"),
    "panel-2": writable("0% 0% 0% 50%"),
  };

  setContext(INSET_CONTEXT, insets);
</script>

<div style="position: relative; width: 100%; height: 100%;">
  <slot />
</div>
