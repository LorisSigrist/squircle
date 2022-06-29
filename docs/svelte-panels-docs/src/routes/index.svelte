<script>
  import { Panel, PanelManager } from "svelte-panels";
  import Counter from "$lib/Counter.svelte";

  const grid = {
    first: {
      first: "panel-1",
      second: {
        first: "panel-2",
        second: "panel-3",
        splitPercentage: 40,
        direction: "column",
      },
      direction: "row",
      splitPercentage: 50,
    },
    second: "timeline",
    splitPercentage: 80,
    direction: "column",
  };

  function changeLayout(){
    grid.first.splitPercentage = Math.random()*100
  }
</script>

<main>
  <PanelManager {grid}>
    <Panel name="panel-1">
      <div style="background-color:red;">
        <span>This Is Panel 1</span>
        <Counter />
        <button on:click={changeLayout}
          >Change Layout</button
        >
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

    <Panel name="timeline">
      <div style="background-color:yellow;">
        <span>Timeline</span>
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
