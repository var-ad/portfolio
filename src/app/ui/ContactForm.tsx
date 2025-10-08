"use client";

import { useState } from "react";
import { SendEmail } from "../actions/SendEmail";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    if (!formData.phone && !formData.email) {
      setFeedback({
        success: false,
        message: "Please provide either a phone number or an email address.",
      });
      setLoading(false);
      return;
    }
    try {
      const result = await SendEmail(formData);
      if (result.success) {
        setFeedback({ success: true, message: "Message sent successfully!" });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setFeedback({ success: false, message: "Failed to send the message." });
      }
    } catch (error) {
      setFeedback({
        success: false,
        message: "An unexpected error occurred. Please try again.",
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
            className="w-full p-3 border bg-transparent rounded-sm text-foreground"
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
            className="w-full p-3 border bg-transparent rounded-sm text-foreground"
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
          className="w-full p-3 border bg-transparent rounded-sm text-foreground"
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          rows={3}
          className="w-full p-3 border bg-transparent rounded-sm text-foreground"
          required
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className={`px-6 py-3 w-full rounded-sm text-white text-lg font-medium bg-black hover:bg-black/45 transition ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
      {feedback && (
        <p
          className={`text-center mt-4 ${
            feedback.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {feedback.message}
        </p>
      )}
    </form>
  );
}
