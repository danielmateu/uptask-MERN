import { Link } from "react-router-dom"



export const Header = () => {
    return (
        <header className="px-4 py-10 bg-white border-b md:flex md:justify-between gap-4">

            <h2 className="text-4xl text-sky-400 font-semibold text-center ">
                Uptask
            </h2>
            <form className="flex items-center justify-center m-2">

                <input
                    type="search"
                    placeholder="Buscar proyectos"
                    className=" rounded-lg p-2 border  lg:w-96"
                />
            </form>

            <div className="flex items-center gap-4 justify-center">
                <Link
                    to='/proyectos'
                    className="font-semibold"
                >
                    Proyectos
                </Link>
                <button
                    type="button"
                    className="text-black hover:text-gray-800 text-sm bg-red-200 hover:bg-red-400 p-2 rounded font-semibold transition-all"
                >
                    Cerrar Sesión
                </button>
            </div>


        </header>
    )
}
