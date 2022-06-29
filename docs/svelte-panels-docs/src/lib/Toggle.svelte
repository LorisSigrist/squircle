<script>
  import { getContext } from "svelte";
  const toggle = getContext("test");
</script>

<button on:click={toggle}>Shift Layout</button>
