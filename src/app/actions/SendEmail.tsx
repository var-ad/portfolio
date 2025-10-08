"use server";
import nodemailer from "nodemailer";

export async function SendEmail({
  name,
  phone,
  email,
  message,
}: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio contact form submission from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully." };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to send email." };
  }
}
