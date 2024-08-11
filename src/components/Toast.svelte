<script>
    import { toasts, ToastContainer, FlatToast, BootstrapToast } from "svelte-toasts";
    
    const toast = toasts.add({
      title: 'Message title',
      description: 'Message body',
      duration: 2000,
      placement: 'top-right',
      type: 'success',
      theme: 'dark'
    });
</script>

<main class="flex flex-col container items-center mt-10">
  <ToastContainer let:toast>
    <BootstrapToast {toast} /> 
  </ToastContainer>
</main>
