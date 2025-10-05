import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_C9I7fKEJ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$SkillIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillIcon;
  const { src, alt, rate } = Astro2.props;
  const solidStars = Array.from({ length: rate });
  const emptyStars = Array.from({ length: 5 - rate });
  const rateHint = "1 star : < 6 months | 2 stars : > 6 months | 3 stars : > 1 year | 4 stars : > 2 years | 5 stars : > 5 years";
  return renderTemplate`${maybeRenderHead()}<div id="skill-div" data-astro-cid-izcqrzkn> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")} id="skill-logo"${addAttribute(alt, "title")} data-astro-cid-izcqrzkn> <div id="stars" data-astro-cid-izcqrzkn> ${solidStars.map(() => renderTemplate`<img src="/knowledgeIcons/solid-star.svg" alt="star" class="star-icon"${addAttribute(rateHint, "title")} data-astro-cid-izcqrzkn>`)} ${emptyStars.map(() => renderTemplate`<img src="/knowledgeIcons/star.svg" alt="star" class="star-icon"${addAttribute(rateHint, "title")} data-astro-cid-izcqrzkn>`)} </div> <h3 id="skill-name" data-astro-cid-izcqrzkn>${alt}</h3> </div> `;
}, "/home/javi/Escritorio/RepositoriosVSCode/PortfolioWeb/src/components/SkillIcon.astro", void 0);

export { $$SkillIcon as $ };
