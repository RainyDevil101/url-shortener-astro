import type { UrlHandlingResult } from "../../interfaces";
import { Button } from "./Button";
import { HandleInput } from "./HandleInput";
import { Modal } from "./Modal";

interface FormProps extends UrlHandlingResult {
    buttonText: string;
}

export const Form: React.FC<FormProps> = ({
    buttonText,
    form,
    isUrlValid,
    shortingUrl,
    handleInputChange,
    handleSubmit,
    shortUrl,
}) => {
    return (
        <div className="rounded-lg flex w-full mx-auto min-h-screen gap-4">
            <form
                onSubmit={handleSubmit}
                method="POST"
                className="flex flex-col md:flex-row w-full mx-auto justify-center gap-4 my-auto items-center p-4"
            >
                <HandleInput
                    isUrlValid={isUrlValid}
                    url={form.url}
                    handleInputChange={handleInputChange}
                />

                <Button buttonText={buttonText} shortingUrl={shortingUrl} />
            </form>
            <Modal shortUrl={shortUrl} />
        </div>
    );
};
