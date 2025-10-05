import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D5E6w1Gj.mjs';
import { manifest } from './manifest_Bk8CyMvH.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/sendemail.astro.mjs');
const _page2 = () => import('./pages/index_old.astro.mjs');
const _page3 = () => import('./pages/privategithub.astro.mjs');
const _page4 = () => import('./pages/privategithub2.astro.mjs');
const _page5 = () => import('./pages/projectdetail/_title_.astro.mjs');
const _page6 = () => import('./pages/projectdetail2/_title_.astro.mjs');
const _page7 = () => import('./pages/projects.astro.mjs');
const _page8 = () => import('./pages/projects2.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/sendEmail.ts", _page1],
    ["src/pages/index_old.astro", _page2],
    ["src/pages/privateGithub.astro", _page3],
    ["src/pages/privateGithub2.astro", _page4],
    ["src/pages/projectDetail/[title].astro", _page5],
    ["src/pages/projectDetail2/[title].astro", _page6],
    ["src/pages/projects.astro", _page7],
    ["src/pages/projects2.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "dca983cb-1570-4f2e-8984-984ed81316aa",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
