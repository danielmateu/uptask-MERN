import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import { FormularioColaborador } from "./FormularioColaborador"


export const NuevoColaborador = () => {

    const { obtenerProyecto, proyecto, cargando, colaborador, agregarColaborador, alerta } = useProyectos();
    const params = useParams();

    useEffect(() => {
        obtenerProyecto(params.id)
    }, []);

    // console.log(colaborador);

    // if(cargando) return 'cargando...'

    if(!proyecto?._id) return <Alerta alerta={alerta}/>

    return (
        <>
            <h1 className="text-4xl font-semibold my-6">
                Añadir Colaborador(a) al proyecto: {proyecto.nombre}
            </h1>

            <div className="mt-10 justify-center">
                <FormularioColaborador />
            </div>

            {cargando ? <p className="text-center">cargando...</p> : colaborador?._id && (
                <div className="flex justify-center mt-8">
                    <div className="bg-white p-8 flex flex-col w-8/12  rounded shadow-lg hover:shadow-sm transition-all">
                        <h2 className="text-center mb-8 text-2xl font-semibold">Resultado: </h2>
                        <div className="flex justify-between items-center">
                            <p className="">{colaborador.nombre}</p>

                            <button 
                                type="button"
                                className="text-semibold text-gray-400 hover:text-gray-500"
                                onClick={() => agregarColaborador({
                                    email: colaborador.email
                                })}
                                >
                                Agregar al proyecto
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
