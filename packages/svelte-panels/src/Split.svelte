<script>
  import { getContext } from "svelte";
  import { BOUNDING_BOX_CONTEXT } from "./stores";
  import splitBoundingBox from "./utils/boundingBox";
  import { writable } from "svelte/store";

  /**
   * @typedef {import("./types").BoundingBox} BoundingBox
   * @typedef {import("./types").GridState} GridState
   * @typedef {import("svelte/store").Writable} Writable
   */

  /**@type {GridState}*/
  export let grid;
  /**@type {BoundingBox}*/
  export let boundingBox;

  const boundingBoxes = getContext(BOUNDING_BOX_CONTEXT);
  let hasChildren;
  let firstBB;
  let secondBB;

  $: if (typeof grid == "string") {
    hasChildren = false;
    if (boundingBoxes[grid] !== undefined) {
      boundingBoxes[grid].set(boundingBox);
    } else {
      boundingBoxes[grid] = writable(boundingBox);
    }
  } else {
    hasChildren = true;
    [firstBB, secondBB] = splitBoundingBox(
      boundingBox,
      grid.splitPercentage,
      grid.direction
    );
  }
</script>

{#if hasChildren}
  <svelte:self grid={grid.first} boundingBox={firstBB} />
  <svelte:self grid={grid.second} boundingBox={secondBB} />
{/if}
