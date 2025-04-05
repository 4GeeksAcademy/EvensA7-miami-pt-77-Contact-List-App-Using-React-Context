import { Link } from "react-router-dom";
import { ContactCard } from "./ContactCard";

export const Home = () => {

    const {store, dispatch, fetchAgenda} = useGlobalReducer()

    useEffect(() => {
        fetchAgenda()
    }, [])

        return (
            <div className="text-center mt-5">
                <Link className="btn btn-ptimary" to={"/update"}>Update</Link>
                <Link className="btn btn-ptimary" to={"/create"}>Create</Link>
            </div>

        );
};