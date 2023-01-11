// import { useState } from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ModalFormularioTarea from '../components/ModalFormularioTarea'
import ModalEliminarTarea from '../components/ModalEliminarTarea'
import { Tarea } from '../components/Tarea'
import useProyectos from '../hooks/useProyectos'
import { Alerta } from '../components/Alerta'



const Proyecto = () => {

    // const [modal, setModal] = useState(false)

    const params = useParams()
    // console.log(params);
    const { obtenerProyecto, proyecto, cargando, handleModalTarea, alerta } = useProyectos()

    useEffect(() => {
        obtenerProyecto(params.id)
    }, [])

    const { nombre } = proyecto;

    // console.log(proyecto)

    if (cargando) return 'Cargando...'

    const { msg } = alerta

    return (
        <>
            <div className="mt-6 flex justify-between">
                <h1 className="font-black text-4xl">{nombre}</h1>
                <div className='flex items-center gap-2 text-gray-400 hover:text-gray-800 mr-4 transition-all' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>

                    <Link
                        to={`/proyectos/editar/${params.id}`}
                        className='font-semibold'
                    >Editar</Link>
                </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
                <button
                    onClick={handleModalTarea}
                    type='button'
                    className='flex items-center justify-between bg-sky-200 hover:bg-sky-300 transition-colors text-sm p-2 mt-4 md:w-auto rounded-lg font-semibold w-96'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    Nueva Tarea
                </button>
            </div>

            <p className="font-semibold text-xl m-4">Tareas del Proyecto</p>

            <div className="flex justify-center">
                <div className="md:w-1/3 lg:w-1/4">
                    {msg && <Alerta alerta={alerta} />}
                </div>
            </div>


            <div className="bg-white shadow-md hover:shadow-none transition-shadow m-6 rounded-lg p-4">
                {proyecto.tareas?.length ? proyecto.tareas?.map(tarea => (
                    <Tarea
                        key={tarea._id}
                        tarea={tarea}
                    />
                )) : <p className='text-center p-4'>No hay tareas en este proyecto</p>}
            </div>

            <ModalFormularioTarea />
            <ModalEliminarTarea />
        </>
    )


}

export default Proyecto