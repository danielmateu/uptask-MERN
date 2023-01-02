import { Link } from "react-router-dom"


export const Login = () => {

    
    return (
        <>
            <h1 className="text-sky-400 text-6xl font-semibold">Inicia Sesion y administra tus {' '}<span className="text-slate-400">proyectos</span>
            </h1>

            <form action="" className="my-10 bg-white rounded-lg shadow-md p-10 ">
                <div className="my-5">
                    <label htmlFor="email" className="text-gray-600 block">Email</label>
                    <input id='email' type="email" placeholder="Email de registro" className="w-full mt-3 p-3 rounded-xl" />
                </div>
                <div className="my-5">
                    <label htmlFor="password" className="text-gray-600 block">Password</label>
                    <input id='password' type="password" placeholder="Password de registro" className="w-full mt-3 p-3 rounded-xl" />
                </div>

                <input type="submit" value='Iniciar Sesión' className="bg-sky-400 p-4 rounded-xl shadow-md hover:shadow-none transition-all font-semibold text-white hover:cursor-pointer hover:text-gray-500 w-full mb-5"  />
            </form>

            <nav className="lg:flex lg:justify-between">
                <Link
                    className="block text-center my-4 text-slate-500 hover:text-slate-600"
                    to='/registrar'
                >
                ¿No tienes una cuenta? Regístrate
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
