<script>
    import {Panel, PanelManager} from 'svelte-panels'
</script>

<main>
<PanelManager grid={{}}>
    <Panel name="panel-1">
        <div style="background-color:red;">
            <p>This Is Panel 1</p>
        </div>
    </Panel>
    <Panel name="panel-2">
        <div style="background-color:blue;">
            <p>This Is Panel 2</p>
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
        width:100vw;
        height:100vh;
    }
</style>