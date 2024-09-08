<script>
  import { enhance } from "$app/forms";
  export let form;
</script>

<h1 class="text-[50px] font-bold text-center mt-11 font-sans">Login</h1>

<form method="POST" class="flex flex-col gap-4 my-5" action="?/login" use:enhance>
  <div class="flex flex-col gap-2">
    <p class="flex gap-3 text-xl">Email</p>
    <input type="text" name="email" class="w-[100%] h-[40px] rounded-lg border border-gray p-3 text-xl" value={form?.email ?? ""}>
    {#if form?.error?.email && form.error.email._errors.length > 0}
      <small class="text-red-700">{form.error.email._errors[0]}</small>
    {/if}
  </div>

  <div class="flex flex-col gap-2">
    <p class="flex gap-3 text-xl">Password</p>
    <input type="password" name="password" class="w-[100%] h-[40px] rounded-lg border border-gray p-3" value={form?.password ?? ""}>
    {#if form?.error?.password && form.error.password._errors.length > 0}
      <small class="text-red-700">{form.error.password._errors[0]}</small>
    {/if}
  </div>
    {#if form?.failed }
        <p class="text-red-700">Invalid Username or Password</p>
    {/if}

  <button class="h-[50px] border border-black bg-black text-white rounded-lg text-2xl my-5">
    Login
  </button>
  <p>Do you have an account? <a href="/register" class="font-bold text-secondaryBlue">Register</a></p>
</form>
