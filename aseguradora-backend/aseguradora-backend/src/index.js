import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import colors from 'colors'
import { db } from './config/db.js'
import policyRoutes from './routes/policiesRoutes.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))

db()

app.use('/api/policies', policyRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(colors.blue('Servidor Aseguradora en puerto:'), PORT)
})
