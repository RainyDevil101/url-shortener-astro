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
            <Form
                buttonText="Acortar URL"
                form={form}
                isUrlValid={isUrlValid}
                shortingUrl={shortingUrl}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                shortUrl={shortUrl}
            />
        </main>
    );
};
