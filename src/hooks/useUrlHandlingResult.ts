import { useState } from "preact/hooks";
import { UrlApiAdapter } from "../api/urlApi.adapter";
import type { Response } from "../interfaces";

export const useUrlHandling = (baseUrl: string, backendUrl: string) => {
  const [form, setForm] = useState({
    url: "",
  });
  const [isUrlValid, setIsUrlValid] = useState(true);
  const [shortingUrl, setShortingUrl] = useState(false);
  const [shortUrl, setShortUrl] = useState("");

  const handleInputChange = (e: Event) => {
    const { name, value } = e.target as HTMLInputElement;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    if (name === "url" && value !== form.url) {
      setIsUrlValid(true);
    }
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setShortingUrl(true);
    setShortUrl("");

    if (form.url.length === 0 || !isValidUrl(form.url)) {
      setShortingUrl(false);
      setIsUrlValid(false);
      console.error("URL no válida");
      return;
    }

    setIsUrlValid(true);

    try {
      const urlApiAdapter = new UrlApiAdapter();

      const response: Response = await urlApiAdapter.post(backendUrl, {
        originalUrl: form.url,
      });

      setShortUrl(baseUrl + response.shortUrl);
      const shortedModal = document.getElementById("id_shorted");

      if (shortedModal instanceof HTMLDialogElement) {
        shortedModal.showModal();
        setForm({
          url: "",
        });
      } else {
        console.error(
          "Elemento con ID 'id_shorted' no es un dialog HTML válido"
        );
        setForm({
          url: "",
        });
      }
    } catch (error) {
      console.log(error);
      setForm({
        url: "",
      });
    }

    setShortingUrl(false);
  };

  const isValidUrl = (url: string): boolean => {
    const urlPattern = /^https:\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
  };

  return {
    shortUrl,
    isUrlValid,
    shortingUrl,
    form,
    handleInputChange,
    handleSubmit,
  };
};