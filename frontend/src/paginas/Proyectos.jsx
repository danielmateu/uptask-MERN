import useProyectos from "../hooks/useProyectos";



export const Proyectos = () => {

    const {proyectos} = useProyectos();
    // console.log(proyectos);
    return (
        <>
            <h1 className="text-4xl font-semibold">Proyectos</h1>

            <div className=""></div>
        </>
    )
}

export default Proyectos;
