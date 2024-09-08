<script>

    import { page } from '$app/stores';
    import { Button } from '$lib/components/ui/button';
</script>

<div class="flex flex-col justify-center items-center text-red-700 w-full min-h-[95vh]">
    <h1 class="text-[100px] font-bold">{$page.status}: {$page.error && $page.error.message}</h1>
    <div class="gap-4">
        <Button on:click={()=>  window.location.reload()}>Reload Page</Button>
        <Button on:click={()=>  window.history.back()}>Go back</Button>
    </div>
</div>
