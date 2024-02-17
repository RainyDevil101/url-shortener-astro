import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_a_uyMUqt.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.WmqqTQ5A.js"}],"styles":[{"type":"external","src":"/_astro/_urlShort_.p-3SCQJc.css"}],"routeData":{"route":"/click-counter","isIndex":false,"type":"page","pattern":"^\\/click-counter\\/?$","segments":[[{"content":"click-counter","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/click-counter.astro","pathname":"/click-counter","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.WmqqTQ5A.js"}],"styles":[{"type":"external","src":"/_astro/_urlShort_.p-3SCQJc.css"}],"routeData":{"route":"/terms-of-service","isIndex":false,"type":"page","pattern":"^\\/terms-of-service\\/?$","segments":[[{"content":"terms-of-service","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms-of-service.astro","pathname":"/terms-of-service","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.UcW4Yv92.js"}],"styles":[{"type":"external","src":"/_astro/_urlShort_.p-3SCQJc.css"}],"routeData":{"route":"/[urlshort]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"urlShort","dynamic":true,"spread":false}]],"params":["urlShort"],"component":"src/pages/[urlShort].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.WmqqTQ5A.js"}],"styles":[{"type":"external","src":"/_astro/_urlShort_.p-3SCQJc.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/pages/[urlShort].astro",{"propagation":"none","containsHead":true}],["C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/pages/click-counter.astro",{"propagation":"none","containsHead":true}],["C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/pages/terms-of-service.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_jTahSSrB.mjs","/src/pages/index.astro":"chunks/pages/index_dwAO-Skv.mjs","/src/pages/terms-of-service.astro":"chunks/pages/terms-of-service_u5IpKbVA.mjs","\u0000@astrojs-manifest":"manifest_x0PSaghn.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_YttKVcuv.mjs","\u0000@astro-page:src/pages/click-counter@_@astro":"chunks/click-counter_z_sxZIt0.mjs","\u0000@astro-page:src/pages/terms-of-service@_@astro":"chunks/terms-of-service_2I9ZMTEy.mjs","\u0000@astro-page:src/pages/[urlShort]@_@astro":"chunks/_urlShort__gQVlb20O.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_tVi6AjZD.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.UcW4Yv92.js","C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/components/counterForm/CounterFormContainer":"_astro/CounterFormContainer.4hI7tDmw.js","@astrojs/preact/client.js":"_astro/client.yVwObuHk.js","C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/components/form/FormContainer":"_astro/FormContainer.fcwjFZwg.js","C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.h1iPSpVJ.js","/astro/hoisted.js?q=1":"_astro/hoisted.WmqqTQ5A.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_urlShort_.p-3SCQJc.css","/favicon.svg","/img/landing-page.png","/_astro/axios.L6U4YIEh.js","/_astro/client.yVwObuHk.js","/_astro/CounterFormContainer.4hI7tDmw.js","/_astro/FormContainer.fcwjFZwg.js","/_astro/HandleInput.sxJMeDXt.js","/_astro/hoisted.UcW4Yv92.js","/_astro/hoisted.WmqqTQ5A.js","/_astro/hooks.module.dxZU798w.js","/_astro/preact.module.dOkjm3yY.js","/_astro/signals.module.h1iPSpVJ.js","/_astro/urlApi.adapter.nwhdYtFq.js"],"buildFormat":"directory"});

export { manifest };
