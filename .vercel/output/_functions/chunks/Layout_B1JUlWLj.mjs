import { e as createComponent, f as createAstro, h as addAttribute, n as renderHead, o as renderSlot, l as renderScript, r as renderTemplate } from './astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/footerIcons/cv.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet">${renderHead()}</head> <header> <div id="header" class="row"> <button id="moreBtn"> <img src="/projectIcons/more.svg" alt="Menú" class="icon"> </button> <button id="sunBtn"> <img src="/headerIcons/sun.svg" alt="Light Mode" class="icon"> </button> <button id="moonBtn"> <img src="/headerIcons/moon.svg" alt="Dark Mode" class="icon"> </button> </div> </header> <!-- Falta rellenar los enlaces --> <aside> <nav id="sideMenu"> <ul> <li><a href="/#About">Sobre mí</a></li> <li><a href="/#Knowledge">Conocimientos</a></li> <li> <a href="/#Projects">Proyectos</a> <ul> <li><a href="/projects2">Todos los proyectos</a></li> </ul> </li> <li><a href="/#Contact">Contacto</a></li> <li> <ul> <li> <a href="https://github.com/fornieDev">Github</a> </li> <li> <a href="https://www.linkedin.com/in/javier-forni%C3%A9-ortega-8435a9307/">Linkedin</a> </li> <li><a href="/curriculum/CV.pdf">Currículum</a></li> </ul> </li> </ul> </nav> </aside> <main> ${renderSlot($$result, $$slots["default"])} </main>  ${renderScript($$result, "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </html>`;
}, "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
