import { formatearFecha } from "../helpers/formatearFecha"
import useProyectos from "../hooks/useProyectos"



export const Tarea = ({ tarea }) => {

    const {handleModalEditarTarea} = useProyectos()

    const { descripcion, nombre, prioridad, fechaEntrega, estado, _id } = tarea
    return (

        <div className="border-b p-2 flex justify-between items-center">
            <div>
                <p className="mb-2 text-xl">{nombre}</p>
                <p className="mb-2 text-sm text-gray-400">{descripcion}</p>
                <p className="mb-2 text-xl">{formatearFecha(fechaEntrega)}</p>
                <p className="mb-2 text-gray-500">Prioridad: {prioridad}</p>
                {/* <p className="text-xl">{nombre}</p> */}
            </div>
            <div className="flex gap-2">
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

                <button className='text-gray-400 hover:text-red-600 transition-colors font-semibold'>
                    Eliminar
                </button>
            </div>
        </div>
    )
}
