import type React from "preact/compat";

interface ModalProps {
  shortUrl: string;
}

export const Modal: React.FC<ModalProps> = ({shortUrl}) => {




    return (
        <>
            <dialog id="id_shorted" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl mb-4">Link acortado 👍!</h3>
                    <input type="text" value={shortUrl} placeholder="Type here" className="input input-bordered input-accent w-full" />
                    <div className="modal-action mt-8">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Aceptar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};
