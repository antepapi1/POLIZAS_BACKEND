import mongoose from 'mongoose'
import colors from 'colors'

export const db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, { dbName: 'Aseguradora' })
    const url = `${conn.connection.host}:${conn.connection.port}`
    console.log(colors.cyan(`Conectado a MongoDB Atlas: ${url}`))
  } catch (error) {
    console.log(colors.red(`Error de conexión: ${error.message}`))
    process.exit(1)
  }
}
