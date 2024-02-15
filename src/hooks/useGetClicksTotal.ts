import { useState } from "preact/hooks";
import { UrlApiAdapter } from "../api/urlApi.adapter";

interface Response {
  visitsCount: number;
}

export const useGetClicksTotal = (backendUrl: string) => {

  const [form, setForm] = useState({
    url: "",
  });
  const [isUrlValid, setIsUrlValid] = useState(true);
  const [gettingTotal, setGettingTotal] = useState(false);
  const [clicks, setClicks] = useState<number | null>(null);

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

    if (form.url.length === 0) return;

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

    try {
      const urlApiAdapter = new UrlApiAdapter();
      const response: Response = await urlApiAdapter.get(backendUrl + shortedUrl);

      setClicks(response.visitsCount);
      const modalClick = document.getElementById("id_shorted");

      if (modalClick instanceof HTMLDialogElement) {
        modalClick.showModal();
      } else {
        console.error(
          "Elemento con ID 'id_shorted' no es un dialog HTML válido"
        );
      }

      setGettingTotal(false);
    } catch (error) {
      setIsUrlValid(false);
      setClicks(null);
    } finally {
      setGettingTotal(false);
      setForm({
        url: "",
      });
    }

  };

  const isValidShortUrl = (url: string): boolean => {
    const urlPattern = /^https:\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
  };

  return {
    isUrlValid,
    gettingTotal,
    clicks,
    handleInputChange,
    handleSubmit,
    form,
  };
};
