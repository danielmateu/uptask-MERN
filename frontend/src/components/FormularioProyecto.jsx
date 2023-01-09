import { useState } from "react"
import useProyectos from "../hooks/useProyectos"
import { Alerta } from "./Alerta"


export const FormularioProyecto = () => {

    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [fechaEntrega, setFechaEntrega] = useState('')
    const [cliente, setCliente] = useState('')

    const {mostrarAlerta, alerta, submitProyecto} = useProyectos();

    const handleSubmit = async(e) => {
        e.preventDefault()

        if([nombre, descripcion, fechaEntrega, cliente].includes('')){
            mostrarAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })

            return
        }

        //Pasar los datos hacia el provider
        await submitProyecto({ nombre, descripcion, fechaEntrega, cliente })

        setNombre('')
        setDescripcion('')
        setFechaEntrega('')
        setCliente('')
    }

    const {msg} = alerta

    return (
        <form 
            className="bg-white py-10 md:w-1/2 rounded-lg px-4 shadow"
            onSubmit={handleSubmit}
        >

            <div className="px-4 mb-4">
                <label htmlFor="nombre" className="tex-gray-600 text-sm font-semibold">
                    Nombre Proyecto
                </label>
                <input
                    id="nombre"
                    type="text"
                    className="border w-full mt-2 placeholder-gray-400 rounded p-2"
                    placeholder="Nombre del Proyecto"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="px-4 mb-4">
                <label htmlFor="descripcion" className="tex-gray-600 text-sm font-semibold">
                    Descripcion Proyecto
                </label>
                <input
                    id="descripcion"
                    className="border w-full mt-2 placeholder-gray-400 rounded p-2"
                    placeholder="Descripcion del Proyecto"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                />
            </div>
            <div className="px-4 mb-4">
                <label htmlFor="fecha-entrega" className="tex-gray-600 text-sm font-semibold">
                    Fecha de entrega
                </label>
                <input
                    id="fecha-entrega"
                    type='date'
                    className="border w-full mt-2 placeholder-gray-400 rounded p-2"
                    value={fechaEntrega}
                    onChange={e => setFechaEntrega(e.target.value)}
                />
            </div>
            <div className="px-4 mb-4">
                <label htmlFor="cliente" className="tex-gray-600 text-sm font-semibold">
                    Nombre Cliente
                </label>
                <input
                    id="cliente"
                    type="text"
                    className="border w-full mt-2 placeholder-gray-400 rounded p-2"
                    placeholder="Nombre del Proyecto"
                    value={cliente}
                    onChange={e => setCliente(e.target.value)}
                />
            </div>
            <input
            type="submit"
            value='Crear Proyecto'
            className="bg-sky-200 hover:bg-sky-400 hover:text-gray-800 p-2 font-semibold w-full rounded transition-all cursor-pointer mb-2"/>

            {
                msg && <Alerta alerta={alerta}/>
            }
        </form>
    )
}
