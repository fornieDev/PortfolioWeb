import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import { $ as $$CustomLayout } from '../chunks/CustomLayout_CMeST3Nc.mjs';
import { P as Projects } from '../chunks/projects_B6ngWLJH.mjs';
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Estaría bien que el json estuviese en una bbdd para que al actualizar solo tenga que modificar el fichero --><!-- Y lo mismo para el CV, skills, foto, y strings -->${renderComponent($$result, "CustomLayout", $$CustomLayout, { "title": "Projects List" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="permanent-marker">All projects</h1> <div class="div-center"> ${Projects.filter((project) => project.title !== "More projects").map((project) => renderTemplate`<br>
                <hr>
                <br>
                <section class="card full-card"> <div class="div-center"> <h2 class="permanent-marker">${project.title}</h2> <div class="div-center"> <section class="projectGallery"> ${project.images.map((image) => renderTemplate`<img${addAttribute(image, "src")} class="projectImage">`)} </section> </div> <p class="indie-flower">${project.description}</p> <p class="indie-flower">${project.aditionalInfo}</p> <video${addAttribute(project.video, "src")} controls width="640" height="360"></video> </div> <div class="div-row center-items"> <a${addAttribute(project.githubUrl, "href")} target="_blank"> <img src="/footerIcons/githubIcon.svg" alt="GitHub Link" width="50" height="50" title="GitHub link"> </a> <a${addAttribute(project.deployUrl, "href")} target="_blank"> <img src="/footerIcons/download.svg" alt="Download" width="50" height="50" title="Download"> </a> </div> </section>`)} </div> ` })}`;
}, "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/projects.astro", void 0);

const $$file = "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
