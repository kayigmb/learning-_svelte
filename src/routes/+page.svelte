<script>
    import { enhance } from "$app/forms";
    export let form 
    export let data;
    const deleteTodo  = async ({todoId}) =>{
        const response = await fetch("api/todo",{
             method:"DELETE",
             body:JSON.stringify({todoId:todoId}),
             headers: {
               "Content-Type": "application/json",
             },
         }) 
       if(response.ok){
            window.location.reload()
       }
       return {success:true}
   }
    const completeTodo  = async ({todoId}) =>{
        const response = await fetch("api/todo",{
             method:"PATCH",
             body:JSON.stringify({todoId:todoId}),
             headers: {
               "Content-Type": "application/json",
             },
         }) 
       if(response.ok){
            window.location.reload()
       }
       return {success:true}
   }
   const Logout = async() =>{ 
        await fetch("api/logout",{
             method:"GET",
             headers: {
               "Content-Type": "application/json",
             },
         })
       window.location.href = "/login"
    }
</script>

<style>
  .checked {
    text-decoration: line-through;
  }
</style>

<div class="flex items-center w-full justify-center gap-4 flex-wrap">
   <h1 class="text-center font-bold text-[25px] sm:text-[50px]">Welcome
     <span class="capitalize"> {data.info.name}</span> !</h1>
   <button on:click={Logout} class=" w-[100px] h-[40px] text-white bg-black
      hover:bg-slate-700 
      font-bold rounded-lg">Logout</button>
</div>
<div class="w-[90%] sm:w-[60%] m-auto mt-5">
   <h1 class="text-center text-[30px] font-bold"> Todo App</h1>
   <div class="mt-8 m-auto flex flex-col items-center w-[100%] gap-5">
      <form method="POST" action="?/todo" class="w-full flex flex-col
         items-center gap-4" use:enhance>   
         <input  type="text" name='todo' placeholder="TODO" class="border
               border-black rounded-md h-[40px] w-[90%] sm:w-[60%] p-2"
            value={form?.todo ?? ""}/>
         {#if form?.error && form.error.todo._errors.length > 0}
            <small class="text-red-700">{form.error.todo._errors[0]}</small>
          {/if}
         <button class="w-[90%] sm:w-[60%] text-[20px] border border-black
            bg-black text-white hover:bg-gray-900  sm:text-[30px] font-bold rounded-lg">ADD</button>
      </form>
   </div>
</div>


<div class="w-[90%] sm:w-[60%] m-auto mt-8 min-h-[250px] shadow-lg border rounded-lg
   border-gray bg-primaryGrey"> 
   <div class=" m-auto p-4  flex flex-col items-center w-[100%] gap-5">
      {#if data.todos.length === 0}   
            <p class="text-[60px] text-center"> Add Todos </p>
         {:else}
      {#each data.todos as data} 
         <div class="flex justify-between items-center  w-[90%] sm:w-[60%]"
            key={data.id}>
            <div class="flex items-center gap-8 h-[50px]"> 
               <input type="checkbox" name="completed"
                  bind:checked={data.completed}
                  on:click={()=>completeTodo({todoId:data.id})} />
               <p class:checked={data.completed} class="font-bold">{data.todo}</p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-4">   
               <button class="w-[70px] sm:w-[100px] h-[40px] rounded-lg bg-red-500 hover:bg-red-700
                  font-bold" on:click={()=>deleteTodo({todoId:data.id})}>Delete</button>
            </div>
         </div>
         <hr class="w-[90%] sm:w-[60%] bg-black h-[2px] rounded-xl"/>
         {/each}
      {/if}

   </div>
</div>


