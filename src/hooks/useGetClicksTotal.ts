import { useState } from "preact/hooks";
import { UrlApiAdapter } from "../api/urlApi.adapter";

export const useGetClicksTotal = (backendUrl: string) => {

  const [form, setForm] = useState({
    url: "",
  });
  const [isUrlValid, setIsUrlValid] = useState(true);
  const [gettingTotal, setGettingTotal] = useState(false);
  const [clicks, setClicks] = useState("");

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
    setGettingTotal(true);
    setClicks("");

    if (form.url.length === 0 || !isValidShortUrl(form.url)) {
      setGettingTotal(false);
      setIsUrlValid(false);
      console.error("URL no válida");
      return;
    }

    setIsUrlValid(true);

    try {
      const urlApiAdapter = new UrlApiAdapter();
      const response: Response = await urlApiAdapter.get(backendUrl);
      console.log(response);
      
    } catch (error) {
      
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
