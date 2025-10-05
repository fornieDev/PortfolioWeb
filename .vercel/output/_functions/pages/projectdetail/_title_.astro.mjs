import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import { $ as $$CustomLayout } from '../../chunks/CustomLayout_CMeST3Nc.mjs';
import { P as Projects } from '../../chunks/projects_B6ngWLJH.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const getStaticPaths = () => {
  return [
    { params: { title: "Zoominoutron" } },
    { params: { title: "My Physio" } },
    { params: { title: "Unity Essentials Project" } },
    { params: { title: "Cube Clicker" } }
  ];
};
const $$title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$title;
  const { title } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "CustomLayout", $$CustomLayout, { "title": "Project Detail" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="permanent-marker">Project Detail</h1> <div class="div-center"> ${Projects.filter((project) => project.title === title).map(
    (project) => renderTemplate`<section class="card full-card"> <div class="div-center"> <h2 class="permanent-marker">${project.title}</h2> <div class="div-center"> <section class="projectGallery"> ${project.images.map((image) => renderTemplate`<img${addAttribute(image, "src")} class="projectImage">`)} </section> </div> <p class="indie-flower">${project.description}</p> <p class="indie-flower">${project.aditionalInfo}</p> <video${addAttribute(project.video, "src")} controls width="800" height="600"></video> </div> <div class="div-row center-items"> <a${addAttribute(project.githubUrl, "href")} target="_blank"> <img src="/footerIcons/githubIcon.svg" alt="GitHub Link" width="50" height="50" title="GitHub Link"> </a> <a${addAttribute(project.deployUrl, "href")} target="_blank"> <img src="/footerIcons/download.svg" alt="Download" width="50" height="50" title="Download"> </a> </div> </section>`
  )} </div> ` })}`;
}, "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/projectDetail/[title].astro", void 0);

const $$file = "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/projectDetail/[title].astro";
const $$url = "/projectDetail/[title]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$title,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
