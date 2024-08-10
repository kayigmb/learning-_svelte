<script>
    import { goto } from "$app/navigation";
    import { Button } from "$lib/components/ui/button";
    import { forEachChild } from "typescript";
    let value =  0
    // const name  =  ["eric","henry","john"];
</script>

<pre>
    {value} 
</pre>

<button on:click={()=> value = 20}>
    20
</button>

<button on:click={()=> goto(`/home/${value}`)}>
    click here to go to page
</button>

<!-- <div> -->
<!--     {name.forEach((e)=> -->
<!--         <div> -->
<!--             {e} -->
<!--         </div> -->
<!--     )} -->
<!-- </div> -->

<!-- <div> -->
<!--     {#each name as name} -->
<!--         <div>{name}</div> -->
<!--     {/each} -->
<!-- </div> -->

<svelte:window on:keyup|preventDefault={(e)=>console.log(e.key)}/>

<div class="flex justify-center w-full">
    <Button class="w-[100px]"on:click={()=> alert("hello")}>hello</Button>
</div>

<h1 class="text-rose-900 font-bold font-sans text-[90px] text-center">Hello world</h1>

<a href="/hello" class="text-red-500 text-2xl underline"> nice page </a>
