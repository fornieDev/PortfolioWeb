import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  console.log("POST /api/sendEmail llamado");
  const { message } = await request.json();
  console.log("Cuerpo recibido:", message);
  if (!message) {
    console.log("Error: falta el mensaje");
    return new Response(JSON.stringify({ error: "Falta el mensaje" }), {
      status: 400
    });
  }
  try {
    console.log("Preparando transporter con nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jfornieortega@gmail.com",
        pass: "jvyn sgcd tcvq iozj"
      }
    });
    console.log("Enviando email...");
    await transporter.sendMail({
      from: `"Portfolio Form" <${"jfornieortega@gmail.com"}>`,
      to: "jfornieortega@gmail.com",
      subject: "Nuevo mensaje desde tu portfolio",
      text: message
    });
    console.log("Email enviado con éxito");
    return new Response(JSON.stringify({ success: true }), {
      status: 200
    });
  } catch (error) {
    console.error("Error enviando email:", error);
    console.error("Error enviando email:", error);
    return new Response(JSON.stringify({ error: "Error enviando email" }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
