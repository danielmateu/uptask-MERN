import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"


export const Sidebar = () => {

    const {auth} = useAuth();

    return (
        <aside className="md:w-80 lg:w-96 px-5 py-">
            <p className="text-xl font-semibold">Hola: {auth.nombre}</p>

            <Link
                to='crear-proyecto'
                className="bg-sky-400 hover:bg-sky-500 w-full p-3 text-black hover:text-white font-semibold block mt-5 rounded transition-all text-center
                "
            >Nuevo Proyecto</Link>
        </aside>
    )
}
