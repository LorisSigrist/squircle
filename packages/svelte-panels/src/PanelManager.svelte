<script>
  import { setContext } from "svelte";
  import { BOUNDING_BOX_CONTEXT } from "./stores";
  import Split from './Split.svelte'

  /**
   * @typedef {import("./types").BoundingBox} BoudingBox
   * @typedef {import("./types").GridState} GridState
   * @typedef {import("svelte/store").Writable} Writable
   */

  /** @type {GridState} */
  export let grid;

  /**
   * @type {Object<string, Writable<BoundingBox>>}
   */
  const boundingBoxes = {};

  const fullBoundingBox = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  };

  setContext(BOUNDING_BOX_CONTEXT, boundingBoxes);
</script>

<div style="position: relative; width: 100%; height: 100%;">
  <Split grid={grid} boundingBox={fullBoundingBox}/>
  <slot />
</div>
