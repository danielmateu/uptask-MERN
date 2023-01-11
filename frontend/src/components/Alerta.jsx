

export const Alerta = ({ alerta }) => {


    return (
        <div className={`${alerta.error ? 'from-red-300 to-red-500' : 'from-sky-300 to-sky-500'} bg-gradient-to-br text-center p-3 rounded-xl text-white font-semibold text-sm w-96 `}>
                {alerta.msg}
            </div>
        
    )
}
