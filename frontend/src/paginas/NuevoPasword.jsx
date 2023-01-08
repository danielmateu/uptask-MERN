import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { Alerta } from "../components/Alerta"



export const NuevoPasword = () => {

    const [tokenValido, setTokenValido] = useState(false)
    const [alerta, setAlerta] = useState('')

    const params = useParams();
    const { token } = params;

    useEffect(() => {
        const comprobarToken = async () => {
            try {
                //TODO mover hacia un cliente axios
                await axios(`http://localhost:4000/api/usuarios/olvide-password/${token}`);
                setTokenValido(true);

            } catch (error) {
                setAlerta({
                    msg:error.response.data.msg,
                    error: true
                })
            }
        }
        comprobarToken();
    }, [])

    const {msg} = alerta;

    return (
        <>
            <h1 className="text-sky-400 text-6xl font-semibold my-10">Reestablece tu password y no pierdas el acceso a tus {' '}<span className="text-slate-400">proyectos</span>
            </h1>

            {
                msg && <Alerta alerta={alerta}/>
            }

            {
                tokenValido && (
                    <form action="" className="my-10 bg-white rounded-lg shadow-md p-10 ">

                        <div className="my-5">
                            <label htmlFor="password" className="text-gray-600 block">Nuevo password</label>
                            <input id='password' type="password" placeholder="Escribe tu password" className="w-full mt-3 p-3 rounded-xl" />
                        </div>


                        <input type="submit" value='Nuevo password' className="bg-sky-400 p-4 rounded-xl shadow-md hover:shadow-none transition-all font-semibold text-white hover:cursor-pointer hover:text-gray-500 w-full mb-5" />
                    </form>
                )
            }

            <nav className="lg:flex lg:justify-between my-10">
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
