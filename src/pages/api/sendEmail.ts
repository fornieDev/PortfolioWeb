export const prerender = false;

import nodemailer from "nodemailer";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const { message } = await request.json();

  if (!message) {
    return new Response(JSON.stringify({ error: "Falta el mensaje" }), {
      status: 400,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Form" <${import.meta.env.EMAIL_USER}>`,
      to: "jfornieortega@gmail.com",
      subject: "Nuevo mensaje desde tu portfolio",
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error enviando email:", error);
    return new Response(JSON.stringify({ error: "Error enviando email" }), {
      status: 500,
    });
  }
};
