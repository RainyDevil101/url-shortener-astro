interface HandleInput {
    isUrlValid: boolean;
    handleInputChange: (e: Event) => void;
    url: string;
}

export const HandleInput: React.FC<HandleInput> = ({
    isUrlValid,
    handleInputChange,
    url,
}) => {
    return (
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
                value={url}
                autocomplete="off"
            />
            {isUrlValid ? null : (
                <p className="text-error text-center text-sm md:text-lg mt-4 absolute left-0 right-0 bottom-0 top-10">
                    La URL ingresada no es válida ☝️🤓
                </p>
            )}
        </div>
    );
};
