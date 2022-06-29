<script>
    let count = 0;
    function increment(){
        count++;
    }
</script>

<span>{count}</span>
<br>
<button on:click={increment}>Increment</button>