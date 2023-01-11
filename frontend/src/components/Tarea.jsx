import { formatearFecha } from "../helpers/formatearFecha"
import useProyectos from "../hooks/useProyectos"



export const Tarea = ({ tarea }) => {

    const {handleModalEditarTarea, handleModalEliminarTarea} = useProyectos()

    const { descripcion, nombre, prioridad, fechaEntrega, estado, _id } = tarea
    return (

        <div className="border rounded-xl p-2 xs:flex-col sm:flex justify-between items-center">
            <div className="">
                <p className="mb-2 text-xl">{nombre}</p>
                <p className="mb-2 text-sm text-gray-400">{descripcion}</p>
                <p className="mb-2 text-sm">{formatearFecha(fechaEntrega)}</p>
                <p className="mb-2 text-gray-500">Prioridad: {prioridad}</p>
                {/* <p className="text-xl">{nombre}</p> */}
            </div>
            <div className="flex gap-2 flex-wrap ">
                <button 
                    className='text-gray-400 hover:text-sky-600 transition-colors font-semibold'
                    onClick={() => handleModalEditarTarea(tarea)}
                >
                    Editar
                </button>

                {estado ? (

                    <button className='text-gray-400 hover:text-green-600 transition-colors font-semibold'>
                        Completa
                    </button>
                ) : (

                    <button className='text-gray-400 hover:text-yellow-600 transition-colors font-semibold'>
                        Incompleta
                    </button>
                )}

                <button 
                    className='text-gray-400 hover:text-red-600 transition-colors font-semibold'
                    onClick={() => handleModalEliminarTarea(tarea)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}
