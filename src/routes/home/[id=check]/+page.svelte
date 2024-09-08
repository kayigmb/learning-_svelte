<script>
    import { page } from "$app/stores";

    let params = $page.params.id    
    import { countAmount } from "../../../store/count";

    function decrement (){
        return countAmount.update((e)=>e-1)
    }
    function increment (){
        return countAmount.update((e)=>e+1)
    }

</script>

<p class="text-center">{params}</p>
<p class="text-center">{$countAmount}</p>

<button on:click={()=>increment()} class="border border-black w-[100px]
    h-[50px] m-auto">+</button>

<button on:click={()=>decrement()} class="border border-black w-[100px]
    h-[50px] m-auto">-</button>
