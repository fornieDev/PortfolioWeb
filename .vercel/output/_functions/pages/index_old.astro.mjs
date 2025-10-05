import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript, h as addAttribute } from '../chunks/astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import { $ as $$CustomLayout } from '../chunks/CustomLayout_CMeST3Nc.mjs';
import { $ as $$SkillIcon } from '../chunks/SkillIcon_Dmg0bzps.mjs';
import { P as Projects } from '../chunks/projects_B6ngWLJH.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$IndexOld = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IndexOld;
  return renderTemplate`${renderComponent($$result, "CustomLayout", $$CustomLayout, { "title": "FornieDev Portfolio" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<div class="div-center"> <h1 class="permanent-marker">WELCOME TO MY PORTFOLIO!!!</h1> <img src="/headerIcons/profilePhoto.JPG" alt="Profile photo" class="profilePhoto" id="profilePhoto"> </div> <div class="div-center"> <p class="indie-flower">
Hi! I'm Javier Fornié Ortega, <b>a self-taught software developer. </b>
I was a physiotherapist when I had an idea for a mobile app, but I didn't have 
			enough money to develop it, so I decided to develop it myself. I started
			to study and develop my app in my house in my free time and, after a few
			months, I published my first app. That was the moment I realized that I loved this;
			 I wanted to become a developer. And this is the beginning
			of my story...
</p> </div>   <h2 class="permanent-marker">KNOWLEDGE</h2>  <div class="div-row"> <section class="card"> <h3 class="indie-flower">
Integrated development environments and frameworks
</h3> <div class="div-row wrap"> <!-- Las cards deberian ser responsive para que al estrechar el navegador ocupen un alto igual --> ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/androidStudioLogo.jpg", "alt": "Android Studio", "rate": "3" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/vs.jpg", "alt": "Visual Studio", "rate": "2" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/eclipse.svg", "alt": "Eclipse", "rate": "1" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/netbeans.svg", "alt": "NetBeans", "rate": "1" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/unity.svg", "alt": "Unity", "rate": "2" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/vsc.jpg", "alt": "Visual Studio Code", "rate": "2" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/astro.png", "alt": "Astro", "rate": "2" })} </div> </section> <section class="card"> <h3 class="indie-flower">Languages</h3> <div class="div-row wrap"> ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/c++.png", "alt": "C++", "rate": "1" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/kotlin.png", "alt": "Kotlin", "rate": "3" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/csharp.png", "alt": "C sharp", "rate": "2" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/java.svg", "alt": "Java", "rate": "1" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/python.svg", "alt": "Python", "rate": "1" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/html2.svg", "alt": "HTML", "rate": "2" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/css3.svg", "alt": "CSS", "rate": "2" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/javascript.svg", "alt": "JavaScript", "rate": "2" })} </div> </section> </div>  <div class="div-row"> <section class="card"> <h3 class="indie-flower">Database management systems</h3> <div class="div-row wrap"> ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/firestore.svg", "alt": "Firestore", "rate": "3" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/cloudstorage.png", "alt": "Cloud Storage", "rate": "3" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/mysql_workbench.jpg", "alt": "MySQL Workbench", "rate": "1" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/oracleSqlDeveloper2.png", "alt": "Oracle SQL Developer", "rate": "1" })} </div> </section> <section class="card"> <h3 class="indie-flower">Database languages</h3> <div class="div-row wrap"> ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/sql.png", "alt": "SQL", "rate": "1" })} ${renderComponent($$result2, "SkillIcon", $$SkillIcon, { "src": "/knowledgeIcons/pl-sql.png", "alt": "PL SQL", "rate": "1" })} </div> </section> </div>     <h2 class="permanent-marker">PROJECTS</h2> <div class="div-center"> <section class="gallery"> ${Projects.filter((project) => project.preview).map((project) => renderTemplate`<a${addAttribute(`/projectDetail/${project.title}`, "href")} class="linkGallery"> <img${addAttribute(project.images[0], "src")}${addAttribute(project.title, "alt")} class="imageGallery"${addAttribute(project.title, "data-title")}${addAttribute(project.description, "data-description")}> </a>`)} </section> </div> <h3 class="indie-flower center-text empty" id="projectTitle"></h3> <p class="indie-flower center-text empty" id="projectDescription"></p> <div class="div-center"> <a href="projects"> <img src="/projectIcons/more.svg" width="50" height="50" title="More projects"> </a> </div> <hr>  <div class="div-row"> <div class="column"> <!-- Social network section --> <h2 class="permanent-marker">Want some info?</h2> <div class="div-row center-items"> <a href="https://github.com/fornieDev" target="_blank"> <img src="/footerIcons/githubIcon.svg" alt="GitHub Icon" width="50" height="50"> </a> <a href="https://www.linkedin.com/in/javier-forni%C3%A9-ortega-8435a9307/" target="_blank"> <img src="/footerIcons/linkedin.svg" alt="LinkedIn" width="50" height="50"> </a> <a href="/curriculum/CV.pdf" target="_blank"> <img src="/footerIcons/cv.svg" alt="Curriculum" width="50" height="50"> </a> </div> <h3 class="indie-flower center-text">
Check my curriculum or social networks
</h3> </div> <div class="column"> <!-- Email section --> <h2 class="permanent-marker">Did you like it?</h2> <div class="div-center"> <a href="mailto:jfornieortega@gmail.com" target="_blank"> <img src="/footerIcons/emailIcon.svg" alt="Email Icon" width="50" height="50"> </a> <h3 class="indie-flower">
Contact me on jfornieortega@gmail.com
</h3> </div> </div> </div> ${renderScript($$result2, "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/index_old.astro?astro&type=script&index=0&lang.ts")} ` })} <!-- window.location.href = \`project?data=\${encodeURIComponent(title!!)}\`; --> <!-- Esto iba dentro del else del listener click de las imagenes de la galeria -->`;
}, "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/index_old.astro", void 0);

const $$file = "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/pages/index_old.astro";
const $$url = "/index_old";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$IndexOld,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
