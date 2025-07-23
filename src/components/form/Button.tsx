interface Button {
    shortingUrl: boolean;
    buttonText: string;
}

export const Button: React.FC<Button> = ({ shortingUrl, buttonText }) => {
    return (
        <button
            disabled={shortingUrl}
            class="btn btn-accent w-full max-w-xl"
            type="submit"
        >
            {buttonText}
        </button>
    );
};
