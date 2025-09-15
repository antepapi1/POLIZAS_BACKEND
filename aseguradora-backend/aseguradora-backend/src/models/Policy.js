import mongoose from 'mongoose'

const policySchema = new mongoose.Schema({
  numeroPoliza: { type: String, required: true, unique: true, trim: true },
  tipoSeguro: { type: String, required: true, enum: ['Auto','Vida','Hogar','Salud'] },
  titular: { type: String, required: true, trim: true },
  monto: { type: Number, required: true, min: 0 }
}, { timestamps: true })

export default mongoose.model('Policy', policySchema)
