import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb+srv://root:1whx42eRiaf4WPVp@cluster0.lilhu8p.mongodb.net/uptask?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`MongoDB conectado en ${url}`)
    } catch (error) {
        console.log(`error ${error.message}`);
        PerformanceObserverEntryList.exit(1)
    }
}

export default conectarDB;