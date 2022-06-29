<script>
  import { Panel, PanelManager } from "svelte-panels";
  import Counter from "$lib/Counter.svelte";
  import Toggle from "$lib/Toggle.svelte";
</script>

<main>
  <PanelManager grid={{}}>
    <Panel name="panel-1">
      <div style="background-color:red;">
        <span>This Is Panel 1</span>
        <Counter />
        <Toggle />
      </div>
    </Panel>
    <Panel name="panel-2">
      <div style="background-color:hotpink;">
        <span>This Is Panel 2</span>
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
