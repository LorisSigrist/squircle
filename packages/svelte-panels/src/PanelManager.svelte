<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { INSET_CONTEXT } from "./stores";
  import splitBoundingBox from './utils/boundingBox'


  /** @type {GridState} */
  export let grid;

  // Insets are written top right bottom left
  const insets = {
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

    const [firstBB, secondBB] = splitBoundingBox(bb, grid.splitPercentage, grid.direction);

    if (typeof grid.first == "string") {
      if(insets[grid.first]){
        insets[grid.first].set(firstBB);
      }else {
        insets[grid.first] = writable(firstBB);
      }
    } else {
      computeInsets(grid.first, firstBB)
    }

    if (typeof grid.second == "string") {
      if(insets[grid.second]){
        insets[grid.second].set(secondBB);
      }else {
        insets[grid.second] = writable(secondBB);
      }
    } else {
      computeInsets(grid.second, secondBB)
    }
  }

  $: computeInsets(grid);

  setContext(INSET_CONTEXT, insets);
</script>

<div style="position: relative; width: 100%; height: 100%;">
  <slot />
</div>
