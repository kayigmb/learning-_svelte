<script>
    import Button from "$lib/components/ui/button/button.svelte";
</script>

<a href="/home" class="text-[30px] text-sky-600"> Go to another page</a>

<div class="w-[90%] sm:w-[60%] m-auto mt-8 h-[500px] border rounded-lg border-black">
   <h1 class="text-center text-[30px] font-bold"> Todo App</h1>
   <div>
      <input type="text" name="input_field" class="border border-black
         rounded-md h-[35px] p-4" />
      <Button> ADD</Button>
   </div>
</div>

