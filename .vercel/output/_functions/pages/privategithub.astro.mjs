import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import { $ as $$CustomLayout } from '../chunks/CustomLayout_CMeST3Nc.mjs';
export { renderers } from '../renderers.mjs';

const $$PrivateGithub = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CustomLayout", $$CustomLayout, { "title": "Private repository" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="div-center"> <h1 class="permanent-marker">Sorry, this is a private repository</h1> <img src="/footerIcons/githubIcon.svg" width="500px"> </div> ` })}`;
}, "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/privateGithub.astro", void 0);

const $$file = "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/privateGithub.astro";
const $$url = "/privateGithub";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PrivateGithub,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
