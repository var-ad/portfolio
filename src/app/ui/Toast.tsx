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

  const toneClasses =
    type === "success"
      ? "border-success-border bg-success-bg text-success"
      : "border-error-border bg-error-bg text-error";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-4 z-50 flex w-full max-w-xs items-start gap-3 rounded-md border px-4 py-3 text-sm shadow-lg transition-opacity ${toneClasses}`}
    >
      <div className="flex-1">
        <div className="font-semibold">
          {type === "success" ? "Success" : "Error"}
        </div>
        <div className="mt-1">{message}</div>
      </div>
      <button
        onClick={() => onClose && onClose()}
        aria-label="Close notification"
        className="rounded-sm text-xs opacity-70 transition-opacity hover:opacity-100"
      >
        ×
      </button>
    </div>
  );
}
