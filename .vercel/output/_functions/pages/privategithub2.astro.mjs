import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B1JUlWLj.mjs';
export { renderers } from '../renderers.mjs';

const $$PrivateGithub2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Private repository" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="center vertical"> <h1>Sorry, this is a private repository</h1> <img src="/footerIcons/githubIcon.svg" width="100em"> </div> ` })}`;
}, "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/privateGithub2.astro", void 0);

const $$file = "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/privateGithub2.astro";
const $$url = "/privateGithub2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PrivateGithub2,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
