import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import { FormularioColaborador } from "./FormularioColaborador"


export const NuevoColaborador = () => {

    const { obtenerProyecto, proyecto, cargando } = useProyectos();
    const params = useParams();

    useEffect(() => {
        obtenerProyecto(params.id)
    }, []);

    if(cargando) return 'cargando...'



    return (
        <>
            <h1 className="text-4xl font-semibold my-6">
                Añadir Colaborador(a) al proyecto: {proyecto.nombre}
            </h1>

            <div className="mt-10 justify-center">
                <FormularioColaborador />
            </div>
        </>
    )
}
