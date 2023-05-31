import { toast } from "react-toastify";

export const customToast = (message, type = 'info') => {
  return toast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    progress: undefined,
    theme: "dark",
  });
}