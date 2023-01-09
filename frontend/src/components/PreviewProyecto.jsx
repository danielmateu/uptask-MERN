import { Link } from "react-router-dom"


export const PreviewProyecto = ({proyecto}) => {
    
    const {nombre, _id, cliente } = proyecto

    return (
        <div className="border-b p-5 flex m-5">
            <p className="flex-1">{nombre} <span className="text-sm text-gray-400">{cliente}</span></p>

            <Link to={`${_id}`} className='text-gray-400 hover:text-gray-600 font-semibold'>Ver Proyecto</Link>
        </div>
    )
}
