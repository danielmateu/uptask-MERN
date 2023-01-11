

export const Alerta = ({ alerta }) => {


    return (
        <div className="flex justify-center">
            <div className={`${alerta.error ? 'from-red-300 to-red-500' : 'from-yellow-300 to-yellow-500'} bg-gradient-to-br text-center p-3 rounded-xl text-black font-semibold text-sm w-96 `}>
                {alerta.msg}
            </div>
        </div>

    )
}
