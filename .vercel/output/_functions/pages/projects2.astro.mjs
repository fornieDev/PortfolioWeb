import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B1JUlWLj.mjs';
import { P as Projects } from '../chunks/projects_B6ngWLJH.mjs';
export { renderers } from '../renderers.mjs';

const $$Projects2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Estaría bien que el json estuviese en una bbdd para que al actualizar solo tenga que modificar el fichero --><!-- Y lo mismo para el CV, skills, foto, y strings -->${renderComponent($$result, "Layout", $$Layout, { "title": "Projects List" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>All projects</h1> <div class="center vertical"> ${Projects.filter((project) => project.title !== "More projects").map((project) => renderTemplate`<br>
                <section class="card full-card"> <div class="div-center"> <h2>${project.title}</h2> <div class="center vertical"> <section id="projectGallery"> ${project.images.map((image) => renderTemplate`<img${addAttribute(image, "src")} class="projectImage">`)} </section> </div> <h3>${project.description}</h3> <h3>${project.aditionalInfo}</h3> <video${addAttribute(project.video, "src")} controls></video> </div> <div class="div-row center-items"> <a${addAttribute(project.githubUrl, "href")} target="_blank"> <img src="/footerIcons/githubIcon.svg" alt="GitHub Link" width="50" height="50" title="GitHub link"> </a> <a${addAttribute(project.deployUrl, "href")} target="_blank"> <img src="/footerIcons/download.svg" alt="Download" width="50" height="50" title="Download"> </a> </div> </section>`)} </div> ` })}`;
}, "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/projects2.astro", void 0);

const $$file = "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/projects2.astro";
const $$url = "/projects2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects2,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
