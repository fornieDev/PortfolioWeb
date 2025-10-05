import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const { message } = await request.json();
  if (!message) {
    return new Response(JSON.stringify({ error: "Falta el mensaje" }), {
      status: 400
    });
  }
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jfornieortega@gmail.com",
        pass: "jvyn sgcd tcvq iozj"
      }
    });
    await transporter.sendMail({
      from: `"Portfolio Form" <${"jfornieortega@gmail.com"}>`,
      to: "jfornieortega@gmail.com",
      subject: "Nuevo mensaje desde tu portfolio",
      text: message
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200
    });
  } catch (error) {
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
