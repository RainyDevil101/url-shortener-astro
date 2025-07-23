import { useUrlHandling } from "../../hooks/useUrlHandlingResult";
import { baseUrl, backendUrl } from "../../api";
import { Form } from "./Form";

export const FormContainer = () => {

    const {
        shortUrl,
        isUrlValid,
        shortingUrl,
        form,
        handleInputChange,
        handleSubmit,
    } = useUrlHandling(baseUrl, backendUrl);

    return (
        <main class="min-h-screen max-w-7xl w-full mx-auto">
            <div class="flex flex-col items-center justify-center min-h-screen">
                <a
                    href="/"
                    class="text-center uppercase font-bold text-5xl mb-8"
                >
                    <span class="text-accent">Shrt</span>ly
                </a>
                <Form
                    buttonText="Acortar URL"
                    form={form}
                    isUrlValid={isUrlValid}
                    shortingUrl={shortingUrl}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    shortUrl={shortUrl}
                />
            </div>
        </main>
    );
};
