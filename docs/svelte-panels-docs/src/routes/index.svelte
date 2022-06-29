<script>
  import { Panel, PanelManager } from "svelte-panels";
  import Counter from "$lib/Counter.svelte";

  const grid = {
    first: "panel-1",
    second: {
      first: "panel-2",
      second: "panel-3",
      splitPercentage: 40,
      direction: "column"
    },
    direction: "row",
    splitPercentage: 50,
  }

</script>

<main>
  <PanelManager {grid}>
    <Panel name="panel-1">
      <div style="background-color:red;">
        <span>This Is Panel 1</span>
        <Counter />
        <button on:click={()=> grid.splitPercentage = Math.random() * 100}>Change Layout</button>
      </div>
    </Panel>
    <Panel name="panel-2">
      <div style="background-color:hotpink;">
        <span>This Is Panel 2</span>
        <Counter />
      </div>
    </Panel>
    <Panel name="panel-3">
      <div style="background-color:purple;">
        <span>This Is Panel 3</span>
        <Counter />
      </div>
    </Panel>
  </PanelManager>
</main>

<style>
  div {
    width: 100%;
    height: 100%;
  }
  main {
    width: 100vw;
    height: 100vh;
  }
</style>
