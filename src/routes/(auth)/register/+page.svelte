<script lang="ts">
    import { enhance } from "$app/forms";
    export let form ;
</script>

<h1 class="text-[50px] font-bold text-center font-sans mt-11">Register</h1>
<form method="POST" class="flex flex-col gap-4 my-5" action="?/register"
    use:enhance>
   <div class="flex flex-col gap-2">
        <p class="flex gap-3 text-xl">Name</p>
        <input type="text" name="name" class="w-[100%] h-[40px] rounded-lg
            border border-gray p-3 text-xl" value={form?.name ?? ""}>
        {#if form?.error?.name && form.error?.name._errors.length >= 1}
            <small class="text-red-700">{form.error.name._errors[0]}</small>
        {/if}
    </div> 
   <div class="flex flex-col gap-2">
        <p class="flex gap-3 text-xl">Email</p>
        <input type="text" name="email" class="w-[100%] h-[40px] rounded-lg
            border border-gray p-3 text-xl" value={form?.email ?? ""}>
        {#if form?.error?.email && form.error?.email._errors.length >= 1}
            <small class="text-red-700">{form.error.email._errors[0]}</small>
        {/if}
    </div> 
   <div class="flex flex-col gap-2">
        <p class="flex gap-3 text-xl">Password</p>
        <input type="password" name="password" class="w-[100%] h-[40px] rounded-lg
            border border-gray p-3 text-xl" value={form?.password ?? ""}>
        {#if form?.error?.password && form.error?.password._errors.length >= 1}
            <small class="text-red-700">{form.error.password._errors[0]}</small>
        {/if}
    </div> 
    {#if form?.failed }
        <p class="text-red-700">{form?.failed}</p>
    {/if}
    <button class="h-[50px] hover:cursor-pointer border border-black bg-black text-white rounded-lg
        text-2xl my-5">Register</button>
    <p>Already have an account? <a href="/login"
        class="font-bold text-secondaryBlue
        ">Login</a></p>
</form>
