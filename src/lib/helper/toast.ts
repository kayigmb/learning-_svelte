import { toasts, ToastContainer, FlatToast } from "svelte-toasts";

type ToastType = "success" | "error" | "info" | "warning";

export const showToast = (
  description: string,
  title: string,
  type: ToastType = "info",
) => {
  toasts.add({
    title,
    description,
    type,
    duration: 2000,
    placement: "top-right",
    showProgress: true,
  });
};
