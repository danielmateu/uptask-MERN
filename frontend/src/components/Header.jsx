import { Link } from "react-router-dom"



export const Header = () => {
    return (
        <header className="px-4 py-10 bg-white border-b">
            <div className="md:flex md:justify-between">
                <h2 className="text-4xl text-sky-400 font-semibold text-center">
                    Uptask
                </h2>

                <input 
                    type="search" 
                    placeholder="Buscar proyectos"
                    className="rounded-lg lg:w-96 block p-2 border"
                />

                <div className="flex items-center gap-4">
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
            </div>

        </header>
    )
}
