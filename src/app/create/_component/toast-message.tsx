"use client";
import { ToastContext } from "@/app/provider/toast-provider";
import { useContext } from "react";

export default function ToastMessage() {
  const { toastMessage, setToastMessage } = useContext(ToastContext);

  const closeToast = () => {
    return setToastMessage && setToastMessage(undefined);
  };

  return (
    toastMessage && (
      <button
        type="button"
        className="absolute w-2/4 bg-gray-900 h-3/4 z-20 top-32 left-16 bg-opacity-80 rounded-3xl flex justify-center items-center "
        onClick={closeToast}
      >
        <div className="flex justify-center items-center rounded-lg p-4 text-white bg-[#d32f2f] text-semibold w-64">
          {toastMessage}
        </div>
      </button>
    )
  );
}
