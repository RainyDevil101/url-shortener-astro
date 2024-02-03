interface Button {
    shortingUrl: boolean;
    buttonText: string;
}

export const Button: React.FC<Button> = ({ shortingUrl, buttonText }) => {
    return (
        <button
            disabled={shortingUrl}
            class="btn btn-accent w-full md:w-auto max-w-xl mt-5 md:mt-0"
            type="submit"
        >
            {buttonText}
        </button>
    );
};
