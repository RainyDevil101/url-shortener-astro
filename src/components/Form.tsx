import { useState } from "preact/hooks";

export const Form = () => {
    const [form, setForm] = useState({
        url: "",
    });

    const [isUrlValid, setIsUrlValid] = useState(true);
    const [shortingUrl, setShortingUrl] = useState(false);

    const handleInputChange = (e: Event) => {
        const { name, value } = e.target as HTMLInputElement;
        console.log(name, value);

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
        if (name === "url" && value !== form.url) {
            setIsUrlValid(true);
        }
    };

    const handleSubmit = (e: Event) => {
        setShortingUrl(true);
        e.preventDefault();

        if (form.url.length === 0) {
            setShortingUrl(false);
            return;
        }

        if (isValidUrl(form.url)) {
            console.log("URL válida:", form.url);
            setIsUrlValid(true);
        } else {
            console.error("URL no válida");
            setIsUrlValid(false);
        }
        console.log("Datos del formulario:", form);
        setShortingUrl(false);
    };

    const isValidUrl = (url: string): boolean => {
        const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return urlPattern.test(url);
    };

    return (
        <div className="rounded-lg flex w-full mx-auto min-h-screen gap-4">
            <form
                onSubmit={handleSubmit}
                method="POST"
                className="flex flex-col md:flex-row w-full mx-auto justify-center gap-4 my-auto items-center p-4"
            >
                <div className="w-full max-w-xl relative">
                    <input
                        type="text"
                        placeholder="https://www.example.com"
                        id="url"
                        name="url"
                        className={`input input-bordered w-full ${
                            isUrlValid ? "input-success" : "input-error"
                        }`}
                        onInput={handleInputChange}
                        value={form.url}
                        autocomplete="off"
                    />
                    {isUrlValid ? null : (
                        <p className="text-error text-center text-sm md:text-lg mt-4 absolute left-0 right-0 bottom-0 top-10">
                            La URL ingresada no es válida ☝️🤓
                        </p>
                    )}
                </div>

                <button
                    disabled={shortingUrl}
                    class="btn btn-accent w-full md:w-auto max-w-xl mt-5 md:mt-0"
                    type="submit"
                >
                    Acortar
                </button>
            </form>
        </div>
    );
};
