<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { BOUNDING_BOX_CONTEXT } from "./stores";
  import splitBoundingBox from "./utils/boundingBox";
  /**
   * @typedef {import("./types").BoundingBox}
   * @typedef {import("./types").GridState}
   * @typedef {import("svelte/store").Writable}
   */

  /** @type {GridState} */
  export let grid;

  /**
   * @type {Object<string, Writable<BoundingBox>>}
   */
  const boundingBoxes = {};

  /**
   * Computes all insets derived from the grid
   * @param {GridState} grid
   * @param {BoundingBox} bb
   * @returns {void}
   */
  function computeBoundingBoxes(
    grid,
    bb = {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }
  ) {
    const [firstBB, secondBB] = splitBoundingBox(
      bb,
      grid.splitPercentage,
      grid.direction
    );

    if (typeof grid.first == "string") {
      if (boundingBoxes[grid.first]) {
        boundingBoxes[grid.first].set(firstBB);
      } else {
        boundingBoxes[grid.first] = writable(firstBB);
      }
    } else {
      computeBoundingBoxes(grid.first, firstBB);
    }

    if (typeof grid.second == "string") {
      if (boundingBoxes[grid.second]) {
        boundingBoxes[grid.second].set(secondBB);
      } else {
        boundingBoxes[grid.second] = writable(secondBB);
      }
    } else {
      computeBoundingBoxes(grid.second, secondBB);
    }
  }

  $: computeBoundingBoxes(grid);

  setContext(BOUNDING_BOX_CONTEXT, boundingBoxes);
</script>

<div style="position: relative; width: 100%; height: 100%;">
  <slot />
</div>
