import { useUrlHandling } from "../../hooks/useUrlHandlingResult";
import { Form } from "./Form";

export const FormContainer = () => {
    const baseUrl = "http://localhost:4321/";
    const backendUrl = "http://localhost:3001/api/v2/url";

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
                buttonText="Acortar"
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
