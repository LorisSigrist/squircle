<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { INSET_CONTEXT } from "./stores";
  /**
   * @typedef {import("./types").GridState}
   * @typedef {import("./types").BoundingBox}
   */

  /** @type {GridState} */
  export let grid;

  // Insets are written top right bottom left
  const insets = {
    "panel-1": writable("0% 50% 0% 0%"),
    "panel-2": writable("0% 0% 0% 50%"),
  };

  /**
   * Computes all insets derived from the grid
   * @param {GridState} grid
   * @param {BoundingBox} bb
   * @returns {void}
   */
  function computeInsets(
    grid,
    bb = {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }
  ) {
    if (typeof grid.first == "string") {
    } else {
    }

    if (typeof grid.second == "string") {
    } else {
    }
  }

  $: computeInsets(grid);

  setContext(INSET_CONTEXT, insets);
</script>

<div style="position: relative; width: 100%; height: 100%;">
  <slot />
</div>
