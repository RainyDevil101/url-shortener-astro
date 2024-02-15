interface ModalProps {
    clicks: number | null;
}

export const ModalClicks: React.FC<ModalProps> = ({ clicks }) => {
    return (
        <>
            <dialog id="id_shorted" className="modal">
                <div className="modal-box">
                    <div className="my-4 flex item-center justify-between">
                        <h3 className="text-3xl font-bold">Clicks</h3>
                        <p className="text-2xl text-center">{clicks}</p>
                    </div>
                    <div className="modal-action mt-8">
                        <form method="dialog">
                            <button className="btn">Aceptar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};
