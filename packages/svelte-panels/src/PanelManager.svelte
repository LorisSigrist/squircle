<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { INSET_CONTEXT } from "./stores";
  /** @typedef {import("./types").GridState}*/

  /** @type {GridState} */
  export let grid;

  /*
   *    Insets are written top right bottom left 
   */
  const insets = {
    "panel-1": writable("0% 50% 0% 0%"),
    "panel-2": writable("0% 0% 0% 50%"),
  };

  const panel1Writabel = insets["panel-1"];

  function toggle(){
    console.log("toggling...")
    
    if($panel1Writabel == "0% 50% 0% 0%"){
        insets["panel-1"].set("0% 40% 0% 0%")
        insets["panel-2"].set( "0% 0% 0% 40%")
    }else {
        insets["panel-1"].set("0% 50% 0% 0%")
        insets["panel-2"].set("0% 0% 0% 50%")
    }
    
  }

  setContext("test", toggle)
  setContext(INSET_CONTEXT, insets);
</script>

<div style="position: relative; width: 100%; height: 100%;">
  <slot />
</div>
