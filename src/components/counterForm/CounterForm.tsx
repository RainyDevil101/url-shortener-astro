import type { UrlHandlingResultClicks } from "../../interfaces/UrlHandlingResult.interface";
import { Button } from "../form/Button";
import { HandleInput } from "../form/HandleInput";

interface FormProps extends UrlHandlingResultClicks {
    buttonText: string;
}

export const CounterForm: React.FC<FormProps> = ({
    handleSubmit,
    isUrlValid,
    form,
    buttonText,
    shortingUrl,
    handleInputChange,
    clicks,
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
        </div>
    );
};
