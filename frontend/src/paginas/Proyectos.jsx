import { PreviewProyecto } from "../components/PreviewProyecto";
import useProyectos from "../hooks/useProyectos";



export const Proyectos = () => {

    const {proyectos} = useProyectos();
    // console.log(proyectos);
    return (
        <>
            <h1 className="text-4xl font-semibold mt-8 ml-8">Proyectos</h1>

            <div className="shadow-md hover:shadow-none transition-shadow bg-white mt-2 rounded-lg m-8">
                {
                    proyectos.length ? 
                    proyectos.map(proyecto => (
                        <PreviewProyecto
                            key={proyecto._id}
                            proyecto={proyecto}
                        />
                    ))
                    : <p className="text-center p-4">No hay proyectos</p>  
                }
            </div>
        </>
    )
}

export default Proyectos;
