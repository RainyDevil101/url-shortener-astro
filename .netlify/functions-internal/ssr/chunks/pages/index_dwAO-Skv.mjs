/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent } from '../astro_a_uyMUqt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './_urlShort__wUODQn4x.mjs';
import { useState } from 'preact/hooks';
import { U as UrlApiAdapter, H as HandleInput, B as Button, b as backendUrl, a as baseUrl } from './click-counter_dp-zS3yr.mjs';
import { jsx, Fragment, jsxs } from 'preact/jsx-runtime';

const useUrlHandling = (baseUrl, backendUrl) => {
  const [form, setForm] = useState({
    url: ""
  });
  const [isUrlValid, setIsUrlValid] = useState(true);
  const [shortingUrl, setShortingUrl] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  const handleInputChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
    if (name === "url" && value !== form.url) {
      setIsUrlValid(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.url.length === 0)
      return;
    setShortingUrl(true);
    setShortUrl("");
    if (!isValidUrl(form.url)) {
      setShortingUrl(false);
      setIsUrlValid(false);
      console.error("URL no válida");
      return;
    }
    try {
      const urlApiAdapter = new UrlApiAdapter();
      const response = await urlApiAdapter.post(backendUrl, {
        originalUrl: form.url
      });
      setShortUrl(baseUrl + response.shortUrl);
      const shortedModal = document.getElementById("id_shorted");
      if (shortedModal instanceof HTMLDialogElement) {
        shortedModal.showModal();
      } else {
        console.error("Elemento con ID 'id_shorted' no es un dialog HTML válido");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setForm({
        url: ""
      });
      setShortingUrl(false);
    }
  };
  const isValidUrl = (url) => {
    const urlPattern = /^https:\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
  };
  return {
    shortUrl,
    isUrlValid,
    shortingUrl,
    form,
    handleInputChange,
    handleSubmit
  };
};

const Modal = ({
  shortUrl
}) => {
  return jsx(Fragment, {
    children: jsx("dialog", {
      id: "id_shorted",
      className: "modal",
      children: jsxs("div", {
        className: "modal-box",
        children: [jsx("h3", {
          className: "font-bold text-2xl mb-4",
          children: "Link acortado 👍!"
        }), jsx("input", {
          type: "text",
          value: shortUrl,
          placeholder: "Type here",
          className: "input input-bordered input-accent w-full"
        }), jsx("div", {
          className: "modal-action mt-8",
          children: jsx("form", {
            method: "dialog",
            children: jsx("button", {
              className: "btn",
              children: "Aceptar"
            })
          })
        })]
      })
    })
  });
};

const Form = ({
  buttonText,
  form,
  isUrlValid,
  shortingUrl,
  handleInputChange,
  handleSubmit,
  shortUrl
}) => {
  return jsxs("div", {
    className: "rounded-lg flex w-full mx-auto min-h-screen gap-4",
    children: [jsxs("form", {
      onSubmit: handleSubmit,
      method: "POST",
      className: "flex flex-col md:flex-row w-full mx-auto justify-center gap-4 my-auto items-center p-4",
      children: [jsx(HandleInput, {
        isUrlValid,
        url: form.url,
        handleInputChange
      }), jsx(Button, {
        buttonText,
        shortingUrl
      })]
    }), jsx(Modal, {
      shortUrl
    })]
  });
};

const FormContainer = () => {
  const {
    shortUrl,
    isUrlValid,
    shortingUrl,
    form,
    handleInputChange,
    handleSubmit
  } = useUrlHandling(baseUrl, backendUrl);
  return jsx("main", {
    class: "min-h-screen max-w-7xl w-full mx-auto",
    children: jsx(Form, {
      buttonText: "Acortar URL",
      form,
      isUrlValid,
      shortingUrl,
      handleInputChange,
      handleSubmit,
      shortUrl
    })
  });
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio", "description": "Pagina web para acortar links!" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormContainer", FormContainer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/components/form/FormContainer", "client:component-export": "FormContainer" })} ` })}`;
}, "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/pages/index.astro", void 0);

const $$file = "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
