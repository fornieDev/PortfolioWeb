import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript, h as addAttribute } from '../chunks/astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B1JUlWLj.mjs';
import { $ as $$SkillIcon } from '../chunks/SkillIcon_Dmg0bzps.mjs';
import { P as Projects } from '../chunks/projects_B6ngWLJH.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FornieDev Portfolio" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="About"> <div id="about-container"> <img src="/headerIcons/profilePhoto.JPG" alt="Profile photo" id="profilePhoto"> <div id="about-text-container"> <h1 id="nameBox"></h1> <h2 id="jobBox"></h2><span id="cursor" style="visibility:hidden">|</span> </div> </div> <p>
Javier Fornié Ortega, <b>desarrolador de software autodidacta.</b>
Cuando era fisioterapeuta tuve una idea de una app mobile,
            pero no tenía dinero suficiente para desarrollarla.
            Por ello, decidí hacerla yo mismo.
            Empecé a estudiar en mis ratos libres, y cuando aprendí las bases,
            comencé a desarrollar mi idea y, tras unos meses, publiqué mi primera app en
            Play Store.En ese momento descubrí que no sólo se me daba bien la programación, además
            me encantaba. Ahí fue cuando decidí convertirme en desarrollador. Y este es el principio de mi historia ...
</p> </section> <section id="Knowledge"> <h1>Conocimiento</h1> <section class="card"> <h3>IDEs y frameworks</h3> <div id="skill-div"> <!-- Las cards deberian ser responsive para que al estrechar el navegador ocupen un alto igual --> ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/androidStudioLogo.jpg", "alt": "Android Studio", "rate": "3" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/vs.jpg", "alt": "Visual Studio", "rate": "2" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/eclipse.svg", "alt": "Eclipse", "rate": "1" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/netbeans.svg", "alt": "NetBeans", "rate": "1" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/unity.svg", "alt": "Unity", "rate": "2" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/vsc.jpg", "alt": "VS Code", "rate": "2" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/astro.png", "alt": "Astro", "rate": "2" })} </div> </section> <section class="card"> <h3>Lenguajes de programación</h3> <div id="skill-div"> ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/c++.png", "alt": "C++", "rate": "1" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/kotlin.png", "alt": "Kotlin", "rate": "3" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/csharp.png", "alt": "C sharp", "rate": "2" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/java.svg", "alt": "Java", "rate": "1" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/python.svg", "alt": "Python", "rate": "1" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/html2.svg", "alt": "HTML", "rate": "2" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/css3.svg", "alt": "CSS", "rate": "2" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/javascript.svg", "alt": "JavaScript", "rate": "2" })} </div> </section> <section class="card"> <h3>Sistemas gestores de bases de datos</h3> <div id="skill-div"> ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/firestore.svg", "alt": "Firestore", "rate": "3" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/cloudstorage.png", "alt": "Cloud Storage", "rate": "3" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/mysql_workbench.jpg", "alt": "MySQL Workbench", "rate": "1" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/oracleSqlDeveloper2.png", "alt": "Oracle SQL", "rate": "1" })} </div> </section> <section class="card"> <h3>Lenguajes de bases de datos</h3> <div id="skill-div"> ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/sql.png", "alt": "SQL", "rate": "1" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/pl-sql.png", "alt": "PL SQL", "rate": "1" })} </div> </section> <section class="toast" id="toast"></section> </section> <section id="Projects"> <h1>Proyectos</h1> <div class="center vertical"> <section id="gallery"> ${Projects.filter((project) => project.preview).map(
    (project) => renderTemplate`<a${addAttribute(`/projectDetail2/${project.title}`, "href")} id="linkGallery"> <img${addAttribute(project.images[0], "src")}${addAttribute(project.title, "alt")} id="imageGallery"${addAttribute(project.title, "data-title")}${addAttribute(project.description, "data-description")}> </a>`
  )} </section> </div> <h3 class="center" id="projectTitle"></h3> <p class="center" id="projectDescription"></p> <div class="center vertical"> <a href="projects2" id="moreBtn"> <img src="/projectIcons/more.svg" width="50" height="50" title="More projects"> </a> </div> </section> <hr> <section id="Contact"> <h1>Contacto</h1> <div id="contact-div"> <div id="column"> <h3>Currículum y RRSS</h3> <div class="row center"> <a href="https://github.com/fornieDev" target="_blank"> <img src="/footerIcons/githubIcon.svg" alt="GitHub Icon" width="40em" height="40em"> </a> <a href="https://www.linkedin.com/in/javier-forni%C3%A9-ortega-8435a9307/" target="_blank"> <img src="/footerIcons/linkedin.svg" alt="LinkedIn" width="50" height="50"> </a> <a href="/curriculum/CV.pdf" target="_blank"> <img src="/footerIcons/cv.svg" alt="Curriculum" width="50" height="50"> </a> </div> </div> <div id="column"> <h3>Contáctame a jfornieortega@gmail.com</h3> <textarea id="emailBox"></textarea> <br> <button id="send"> <img src="/footerIcons/emailIcon.svg" alt="Email Icon" width="50" height="50"> </button> </div> </div> </section> ${renderScript($$result2, "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/index.astro", void 0);

const $$file = "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
