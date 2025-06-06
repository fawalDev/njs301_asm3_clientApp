import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../hooks/reduxHooks";
import convertToFraction from "../../ultil/convertToFraction";
import Modal from "../UI/Modal";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ClientRoutes } from "../../ultil/clientRoutes";

function ProductModal() {
    const prodState = useAppSelector(({ productModal }) => productModal.product)

    return (
        <Modal >
            <div className="grid md:grid-cols-2 justify-center items-center gap-4 py-4">
                <img src={prodState.img1} alt={prodState.name}
                    className="h-52 md:h-auto" />
                <div className="flex flex-col gap-2 md:gap-4">
                    <h6 className="text-2xl font-semibold">{prodState.name}</h6>
                    <p className="text-xl text-zinc-600">{convertToFraction(prodState.price)}</p>
                    <div className=" overflow-auto max-h-52 md:max-h-96">
                        <p>{prodState.short_desc}</p>
                    </div>
                    <div>
                        <Link to={`${ClientRoutes.Detail}/${prodState._id?.$oid}`} className="inline-block py-4 pl-5 pr-8 text-white bg-slate-800">
                            <FontAwesomeIcon icon={faCartShopping} className="mr-4" />
                            View Detail
                        </Link>
                    </div>
                </div>

            </div>
        </Modal>
    );
}

export default ProductModal;