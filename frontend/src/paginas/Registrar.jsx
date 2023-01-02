import { useState } from "react"
import { Link } from "react-router-dom"


export const Registrar = () => {


    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('');

    return (
        <>
            <h1 className="text-sky-400 text-6xl font-semibold">Crea tu cuenta y administra tus {' '}<span className="text-slate-400">proyectos</span>
            </h1>

            <form action="" className="my-10 bg-white rounded-lg shadow-md p-10 ">
                <div className="my-5">
                    <label htmlFor="nombre" className="text-gray-600 block">Nombre</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder="Nombre de usuario" className="w-full mt-3 p-3 rounded-xl" 
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="my-5">
                    <label htmlFor="email" className="text-gray-600 block">Email</label>
                    <input
                        id='email'
                        type="email"
                        placeholder="Email de registro" 
                        className="w-full mt-3 p-3 rounded-xl" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="my-5">
                    <label htmlFor="password" className="text-gray-600 block">Password</label>
                    <input
                        id='password'
                        type="password"
                        placeholder="Password de registro" 
                        className="w-full mt-3 p-3 rounded-xl"
                        value={password}
                        onChange={e => setPassword(e.target.value)}    
                    />
                </div>
                <div className="my-5">
                    <label htmlFor="password2" className="text-gray-600 block">Repite tu Password</label>
                    <input
                        id='password2'
                        type="password"
                        placeholder="Repite tu Password" 
                        className="w-full mt-3 p-3 rounded-xl" 
                        value={repetirPassword}
                        onChange={e => setRepetirPassword(e.target.value)}
                    />
                </div>

                <input type="submit" value='Crear cuenta' className="bg-sky-400 p-4 rounded-xl shadow-md hover:shadow-none transition-all font-semibold text-white hover:cursor-pointer hover:text-gray-500 w-full mb-5"  />
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
