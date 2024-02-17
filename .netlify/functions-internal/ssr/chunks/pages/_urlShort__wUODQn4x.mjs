/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_a_uyMUqt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$4 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer footer-center bg-base-200 text-base-content rounded p-6"> <nav class="grid grid-flow-col gap-4"> <a class="link link-hover" href="/">Shrtly</a> <a class="link link-hover" href="/click-counter">Contador de clicks</a> <a class="link link-hover" href="/terms-of-service"> Términos de servicio</a> </nav> <aside> <p class="text-accent">
Copyright © ${year} - <span class="font-bold cursor-pointer"><a href="https://www.linkedin.com/in/alexisherrerac/" target="_blank">Alexis Herrera</a></span> </p> </aside> </footer>`;
}, "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate` <html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image" content="https://shrt-url-ah.netlify.app/img/landing-page.png"><meta property="og:url" content="https://shrt-url-ah.netlify.app"><meta property="og:type" content="website"><meta name="author" content="Alexis Herrera Carreño"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> <a href="/" class="text-center uppercase font-bold text-5xl fixed top-4 left-4 hidden md:block z-50"> <span class="text-accent">Shrt</span>ly
</a> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Loading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Loading;
  return renderTemplate`${maybeRenderHead()}<span class="loading loading-spinner loading-lg"></span>`;
}, "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/components/Loading.astro", void 0);

const $$Astro = createAstro();
const $$urlShort = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$urlShort;
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "title": "Redirigiendo...", "description": "Redirigiendo al sitio web! Espera un momento..." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen max-w-7xl w-full flex justify-center flex-col mx-auto items-center gap-6"> ${renderComponent($$result2, "Loading", $$Loading, {})} <h1 class="uppercase text-3xl font-semibold">Redirigiendo 😎</h1> </main> ` })}`;
}, "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/pages/[urlShort].astro", void 0);

const $$file = "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/pages/[urlShort].astro";
const $$url = "/[urlShort]";

const _urlShort_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$urlShort,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _urlShort_ as _ };
