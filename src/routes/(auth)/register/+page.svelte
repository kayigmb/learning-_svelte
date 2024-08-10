<script>
    import { Button } from "$lib/components/ui/button";

</script>

<a href="/">home</a>

<h1 class="text-[50px] font-bold text-center font-sans mt-11">Register</h1>


<form method="POST" class="flex flex-col gap-4 my-5">
   <div class="flex flex-col gap-2">
        <p class="flex gap-3 text-xl">Email</p>
        <input type="text" name="email" class="w-[100%] h-[40px] rounded-lg
            border border-gray p-3 text-xl">
    </div> 
   <div class="flex flex-col gap-2">
        <p class="flex gap-3 text-xl">Password</p>
        <input type="password" name="password" class="w-[100%] h-[40px] rounded-lg
            border border-gray p-3 text-xl">
    </div> 
	<Button class="h-[50px] text-2xl my-5">Register</Button>
    <p>Already have an account? <a href="/login"
        class="font-bold text-secondaryBlue
        ">Login</a></p>
</form>
