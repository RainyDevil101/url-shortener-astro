import { useGetClicksTotal } from "../../hooks/useGetClicksTotal";
import { CounterForm } from "./CounterForm";

export const CounterFormContainer = () => {
    const backendUrl = "http://localhost:3001/api/v2/url";

    const {
        clicks,
        gettingTotal,
        handleInputChange,
        handleSubmit,
        isUrlValid,
        form,
    } = useGetClicksTotal(backendUrl);

    return (
        <main class="min-h-screen max-w-7xl w-full mx-auto">
            <CounterForm
                buttonText="Ver clicks!"
                form={form}
                isUrlValid={isUrlValid}
                shortingUrl={gettingTotal}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                clicks={clicks}
            />
        </main>
    );
};
