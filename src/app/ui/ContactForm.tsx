"use client";

import { useState } from "react";
import { SendEmail } from "../actions/SendEmail";
import Toast from "./Toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
    visible: boolean;
  }>({ message: "", type: "success", visible: false });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setToast((s) => ({ ...s, visible: false }));

    if (!formData.phone && !formData.email) {
      setToast({
        message: "Please provide either a phone number or an email address.",
        type: "error",
        visible: true,
      });
      setLoading(false);
      return;
    }
    try {
      const result = await SendEmail(formData);
      if (result.success) {
        setToast({
          message: "Message sent successfully!",
          type: "success",
          visible: true,
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setToast({
          message: "Failed to send the message.",
          type: "error",
          visible: true,
        });
      }
    } catch {
      setToast({
        message: "An unexpected error occurred. Please try again.",
        type: "error",
        visible: true,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-2 w-full md:w-1/2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="themed-input"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            inputMode="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="themed-input"
          />
        </div>
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="themed-input"
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          rows={3}
          className="themed-input min-h-28 resize-y"
          required
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className={`w-full rounded-sm bg-accent px-6 py-3 text-lg font-medium text-accent-foreground transition hover:brightness-110 ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
      {toast.visible && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast((s) => ({ ...s, visible: false }))}
        />
      )}
    </form>
  );
}
