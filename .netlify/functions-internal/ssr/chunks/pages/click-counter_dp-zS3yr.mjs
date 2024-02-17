/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent } from '../astro_a_uyMUqt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { useState } from 'preact/hooks';
import axios from 'axios';
import { jsx, jsxs, Fragment } from 'preact/jsx-runtime';
import { $ as $$Layout } from './_urlShort__wUODQn4x.mjs';

const baseUrl = "https://shrt-url-ah.netlify.app/";
const backendUrl = "https://url-shortener-dlcc.onrender.com/api/v2/url";
const backendUrlClicks = "https://url-shortener-dlcc.onrender.com/api/v2/url/short/";

class UrlApiAdapter {
  axios = axios;
  async post(url, data) {
    try {
      const response = await this.axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error("Error in Axios adapter:", error);
      throw error;
    }
  }
  async get(url) {
    try {
      const {
        data
      } = await this.axios.get(url);
      return data;
    } catch (error) {
      console.error("Error in Axios adapter:", error);
      throw error;
    }
  }
}

const useGetClicksTotal = (backendUrl) => {
  const [form, setForm] = useState({
    url: ""
  });
  const [isUrlValid, setIsUrlValid] = useState(true);
  const [gettingTotal, setGettingTotal] = useState(false);
  const [clicks, setClicks] = useState(null);
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
    setGettingTotal(true);
    setClicks(null);
    if (!isValidShortUrl(form.url)) {
      setGettingTotal(false);
      setIsUrlValid(false);
      console.error("URL no válida");
      return;
    }
    setIsUrlValid(true);
    const url = form.url;
    const match = url.match(/\/([^\/]+)$/);
    const shortedUrl = match ? match[1] : null;
    console.log(backendUrl + shortedUrl);
    try {
      const urlApiAdapter = new UrlApiAdapter();
      const response = await urlApiAdapter.get(backendUrl + shortedUrl);
      setClicks(response.visitsCount);
      const modalClick = document.getElementById("id_shorted");
      if (modalClick instanceof HTMLDialogElement) {
        modalClick.showModal();
      } else {
        console.error("Elemento con ID 'id_shorted' no es un dialog HTML válido");
      }
      setGettingTotal(false);
    } catch (error) {
      setIsUrlValid(false);
      setClicks(null);
    } finally {
      setGettingTotal(false);
      setForm({
        url: ""
      });
    }
  };
  const isValidShortUrl = (url) => {
    const urlPattern = /^https:\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
  };
  return {
    isUrlValid,
    gettingTotal,
    clicks,
    handleInputChange,
    handleSubmit,
    form
  };
};

const Button = ({
  shortingUrl,
  buttonText
}) => {
  return jsx("button", {
    disabled: shortingUrl,
    class: "btn btn-accent w-full md:w-auto max-w-xl mt-5 md:mt-0",
    type: "submit",
    children: buttonText
  });
};

const HandleInput = ({
  isUrlValid,
  handleInputChange,
  url
}) => {
  return jsxs("div", {
    className: "w-full max-w-xl relative",
    children: [jsx("input", {
      type: "text",
      placeholder: "https://www.example.com",
      id: "url",
      name: "url",
      className: `input input-bordered w-full ${isUrlValid ? "input-success" : "input-error"}`,
      onInput: handleInputChange,
      value: url,
      autocomplete: "off"
    }), isUrlValid ? null : jsx("p", {
      className: "text-error text-center text-sm md:text-lg mt-4 absolute left-0 right-0 bottom-0 top-10",
      children: "La URL ingresada no es válida ☝️🤓"
    })]
  });
};

const ModalClicks = ({
  clicks
}) => {
  return jsx(Fragment, {
    children: jsx("dialog", {
      id: "id_shorted",
      className: "modal",
      children: jsxs("div", {
        className: "modal-box",
        children: [jsxs("div", {
          className: "my-4 flex item-center justify-between",
          children: [jsx("h3", {
            className: "text-3xl font-bold",
            children: "Clicks"
          }), jsx("p", {
            className: "text-2xl text-center",
            children: clicks
          })]
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

const CounterForm = ({
  handleSubmit,
  isUrlValid,
  form,
  buttonText,
  shortingUrl,
  handleInputChange,
  clicks
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
    }), jsx(ModalClicks, {
      clicks
    })]
  });
};

const CounterFormContainer = () => {
  const {
    clicks,
    gettingTotal,
    handleInputChange,
    handleSubmit,
    isUrlValid,
    form
  } = useGetClicksTotal(backendUrlClicks);
  return jsx("main", {
    class: "min-h-screen max-w-7xl w-full mx-auto",
    children: jsx(CounterForm, {
      buttonText: "Ver clicks!",
      form,
      isUrlValid,
      shortingUrl: gettingTotal,
      handleInputChange,
      handleSubmit,
      clicks
    })
  });
};

const $$Astro = createAstro();
const $$ClickCounter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClickCounter;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Clicks Counter", "description": "Contador de clicks de los links ya acortados." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CounterFormContainer", CounterFormContainer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/components/counterForm/CounterFormContainer", "client:component-export": "CounterFormContainer" })} ` })}`;
}, "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/pages/click-counter.astro", void 0);

const $$file = "C:/Users/alex_/OneDrive/Escritorio/Workspace/Workspace-portfolio/projects/url-shortener/src/pages/click-counter.astro";
const $$url = "/click-counter";

const clickCounter = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ClickCounter,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Button as B, HandleInput as H, UrlApiAdapter as U, baseUrl as a, backendUrl as b, clickCounter as c };
