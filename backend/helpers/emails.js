import nodemailer from 'nodemailer';

export const emailRegistro = async (datos) => {
    // console.log('DATOS', datos)
    const { email, nombre, token } = datos

    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "c3be0d6ee0d5e6",
            pass: "b48f80fb10cdd9"
        }
    });

    // Informacion del email

    const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "Uptask - Confirma tu cuenta",
        text: "Comprueba tu cuenta en Uptask",
        html: `<p>Hola: ${nombre}, comprueba tu cuenta en Uptask</p>
        <p>Haz click en el siguiente enlace para confirmar tu cuenta:</p>

        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta</a>
        
        <p>Si no creaste ninguna cuenta para usar UpTask, puedes ignorar este menjsaje</p>
        
        `
    })
}