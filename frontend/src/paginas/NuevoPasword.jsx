import { Link } from "react-router-dom"



export const NuevoPasword = () => {


    return (
        <>
            <h1 className="text-sky-400 text-6xl font-semibold">Reestablece tu password y no pierdas el acceso a tus {' '}<span className="text-slate-400">proyectos</span>
            </h1>

            <form action="" className="my-10 bg-white rounded-lg shadow-md p-10 ">
                
                <div className="my-5">
                    <label htmlFor="password" className="text-gray-600 block">Nuevo password</label>
                    <input id='password' type="password" placeholder="Escribe tu password" className="w-full mt-3 p-3 rounded-xl" />
                </div>
                

                <input type="submit" value='Nuevo password' className="bg-sky-400 p-4 rounded-xl shadow-md hover:shadow-none transition-all font-semibold text-white hover:cursor-pointer hover:text-gray-500 w-full mb-5"  />
            </form>

            <nav className="lg:flex lg:justify-between">
                <Link
                    className="block text-center my-4 text-slate-500 hover:text-slate-600"
                    to='/'
                >
                ¿Ya estás registrado? Inicia sesión
                </Link>
                <Link
                    className="block text-center my-4 text-slate-500 hover:text-slate-600"
                    to='/olvide-password'
                >
                Olvidé mi Password
                </Link>

            </nav>
        </>
    )
}
