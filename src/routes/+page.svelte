<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import Input from "../components/Input.svelte";
    let completed = false
</script>

<style>
  .line-through {
    text-decoration: line-through;
  }
</style>

<h1 class="text-center font-bold text-[30px] sm:text-[50px]">Welcome Name of the person!</h1>

<div class="w-[90%] sm:w-[60%] m-auto mt-5">
   <h1 class="text-center text-[30px] font-bold"> Todo App</h1>
   <div class="mt-8 m-auto flex flex-col items-center w-[100%] gap-5">
         <Input name="todoField" type="text" placeholder="TODO" styling="border
            border-black rounded-md h-[40px] w-[90%] sm:w-[60%] p-2" />  
      <Button class="w-[90%] sm:w-[60%] text-[20px] sm:text-[30px] font-bold">ADD</Button>
   </div>
</div>


<div class="w-[90%] sm:w-[60%] m-auto mt-8 min-h-[250px] shadow-lg border rounded-lg
   border-gray bg-primaryGrey"> 
   <div class="mt-8 m-auto flex flex-col items-center w-[100%] gap-5">

      <!-- individidual div       -->
      <div class="flex justify-between items-center w-[90%] sm:w-[60%]">
         <div class="flex items-center gap-8 h-[50px]"> 
            <input type="checkbox" name="completed" bind:checked={completed} />
            <p class:line-through={completed} class="font-bold">TODO DESCRIPTION</p>
         </div>
         <div class="flex flex-col sm:flex-row gap-4 sm:gap-4">   
            <Button class="w-[70px] sm:w-[100px] bg-green-500 hover:bg-green-700 font-bold">Update</Button>
            <Button class="w-[70px] sm:w-[100px] bg-red-500 hover:bg-red-700 font-bold">Delete</Button>
         </div>
      </div>
      <hr class="w-[90%] sm:w-[60%] bg-black h-[2px] rounded-xl"/>

   </div>
</div>


