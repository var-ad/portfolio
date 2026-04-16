"use client";

import { useEffect } from "react";

type ToastProps = {
  message: string;
  type?: "success" | "error";
  onClose?: () => void;
  duration?: number;
};

export default function Toast({
  message,
  type = "success",
  onClose,
  duration = 3500,
}: ToastProps) {
  useEffect(() => {
    const t = setTimeout(() => onClose && onClose(), duration);
    return () => clearTimeout(t);
  }, [onClose, duration]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed right-4 bottom-6 max-w-xs w-full z-50 shadow-lg rounded-md px-4 py-3 text-sm flex items-start gap-3 transition-opacity bg-white dark:bg-slate-800 border ${
        type === "success"
          ? "border-green-200 text-green-800"
          : "border-red-200 text-red-800"
      }`}
    >
      <div className="flex-1">
        <div className="font-medium">
          {type === "success" ? "Success" : "Error"}
        </div>
        <div className="mt-1">{message}</div>
      </div>
      <button
        onClick={() => onClose && onClose()}
        aria-label="Close notification"
        className="text-xs opacity-70 hover:opacity-100"
      >
        ×
      </button>
    </div>
  );
}
