import { renderers } from './renderers.mjs';
import { manifest } from './manifest_x0PSaghn.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_YttKVcuv.mjs');
const _page1 = () => import('./chunks/click-counter_z_sxZIt0.mjs');
const _page2 = () => import('./chunks/terms-of-service_2I9ZMTEy.mjs');
const _page3 = () => import('./chunks/_urlShort__gQVlb20O.mjs');
const _page4 = () => import('./chunks/index_tVi6AjZD.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/click-counter.astro", _page1],
    ["src/pages/terms-of-service.astro", _page2],
    ["src/pages/[urlShort].astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "b7b337f5-6960-4664-9f2a-832ea7e452ab"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
