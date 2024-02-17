/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderSlot, f as renderComponent } from '../astro_a_uyMUqt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './_urlShort__wUODQn4x.mjs';

const $$Astro$6 = createAstro();
const $$HeaderH4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeaderH4;
  return renderTemplate`${maybeRenderHead()}<h4 class="ml-4 my-4 font-medium text-2xl"> ${renderSlot($$result, $$slots["default"])} </h4>`;
}, "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/components/terms/HeaderH4.astro", void 0);

const $$Astro$5 = createAstro();
const $$HeaderH3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeaderH3;
  return renderTemplate`${maybeRenderHead()}<h3 class="uppercase font-semibold text-3xl"> ${renderSlot($$result, $$slots["default"])} </h3>`;
}, "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/components/terms/HeaderH3.astro", void 0);

const $$Astro$4 = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Section;
  return renderTemplate`${maybeRenderHead()}<section class="my-10"> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/components/terms/Section.astro", void 0);

const $$Astro$3 = createAstro();
const $$Pharagraph = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Pharagraph;
  return renderTemplate`${maybeRenderHead()}<p class="my-4 text-gray-300"> ${renderSlot($$result, $$slots["default"])} </p>`;
}, "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/components/terms/Pharagraph.astro", void 0);

const $$Astro$2 = createAstro();
const $$UL = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$UL;
  return renderTemplate`${maybeRenderHead()}<ul class="ml-4 my-4 text-gray-300 list-disc list-inside"> ${renderSlot($$result, $$slots["default"])} </ul>`;
}, "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/components/terms/UL.astro", void 0);

const $$Astro$1 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`${maybeRenderHead()}<main class="min-h-screen max-w-3xl w-full mx-auto px-4 py-20"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/components/common/Main.astro", void 0);

const $$Astro = createAstro();
const $$TermsOfService = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TermsOfService;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "T\xE9rminos de Servicio", "description": "T\xE9rminos de Servicio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<article> ${renderComponent($$result3, "Section", $$Section, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "HeaderH3", $$HeaderH3, {}, { "default": ($$result5) => renderTemplate`Términos de Servicio` })} ${renderComponent($$result4, "Pharagraph", $$Pharagraph, {}, { "default": ($$result5) => renderTemplate`
Bienvenido a ShortURL. Estos términos de servicio establecen
                    las reglas para acceder y utilizar el sitio web de ShortURL
                    y cualquier contenido, funcionalidad o servicios
                    relacionados ofrecidos por el Sitio (denominados
                    colectivamente el "Servicio"). Si eres un visitante al
                    acceder o utilizar el Sitio, aceptas cumplir con estos
                    Términos. Lee cuidadosamente los siguientes términos antes
                    de usar el Sitio. Tu uso del Sitio está condicionado a la
                    aceptación y cumplimiento de estos Términos. Si no estás de
                    acuerdo con alguna parte de estos Términos, no puedes
                    utilizar el Sitio.
` })} ` })} ${renderComponent($$result3, "Section", $$Section, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "HeaderH3", $$HeaderH3, {}, { "default": ($$result5) => renderTemplate`Condiciones de Uso` })} ${renderComponent($$result4, "HeaderH4", $$HeaderH4, {}, { "default": ($$result5) => renderTemplate`Desactivación de Enlaces` })} ${renderComponent($$result4, "UL", $$UL, {}, { "default": ($$result5) => renderTemplate` <li>
Los enlaces que no tengan al menos un clic en 30 días
                        serán eliminados.
</li> ` })} ${renderComponent($$result4, "HeaderH4", $$HeaderH4, {}, { "default": ($$result5) => renderTemplate`
Disponibilidad para Usuarios de Todos los Países y Edades
` })} ${renderComponent($$result4, "UL", $$UL, {}, { "default": ($$result5) => renderTemplate` <li>Contenido que propague phishing, malware o virus.</li> <li>Contenido abusivo o sospechoso.</li> <li>Contenido pornográfico o sexual.</li> <li>Contenido violento o prejuicioso.</li> <li>Contenido relacionado con drogas, armas o alcohol.</li> <li>
Contenido que pueda infringir los derechos de otras
                        personas.
</li> <li>
Contenido desagradable, explícito u ofensivo que cause
                        cualquier tipo de malestar a los usuarios.
</li> <li>Pop-ups, scripts y código malicioso.</li> <li>Doble redirección.</li> ` })} ${renderComponent($$result4, "HeaderH4", $$HeaderH4, {}, { "default": ($$result5) => renderTemplate`
Eliminación de Enlaces que Incumplen las Condiciones
` })} ${renderComponent($$result4, "Pharagraph", $$Pharagraph, {}, { "default": ($$result5) => renderTemplate`
Cualquier enlace corto que lleve a una página de destino que
                    se ajuste a las condiciones anteriores puede ser eliminado.
                    Todos los enlaces creados son analizados por nuestro equipo.
                    Si recibimos un informe de spam o notamos cualquier tipo de
                    comportamiento abusivo en contra de nuestros términos de
                    servicio, el enlace corto será eliminado sin previo aviso.
` })} ` })} ${renderComponent($$result3, "Section", $$Section, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "HeaderH3", $$HeaderH3, {}, { "default": ($$result5) => renderTemplate`Descargo de Responsabilidad` })} ${renderComponent($$result4, "Pharagraph", $$Pharagraph, {}, { "default": ($$result5) => renderTemplate`
El servicio gratuito de Shrtly tiene algunas limitaciones,
                    por lo tanto, no podemos garantizar que el Sitio o los
                    servicios serán ininterrumpidos, seguros o libres de
                    errores. El propietario no será responsable de errores u
                    omisiones en este Sitio o de cualquier daño que puedas
                    sufrir.
` })} ` })} </article> ` })} ` })}`;
}, "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/pages/terms-of-service.astro", void 0);

const $$file = "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/pages/terms-of-service.astro";
const $$url = "/terms-of-service";

export { $$TermsOfService as default, $$file as file, $$url as url };
