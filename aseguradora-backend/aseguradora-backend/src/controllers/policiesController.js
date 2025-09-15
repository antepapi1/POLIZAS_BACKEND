import Policy from '../models/Policy.js'
import { validateObjectId, handleNotFound } from '../utils/index.js'

export const createPolicy = async (req, res) => {
  try {
    const { numeroPoliza, tipoSeguro, titular, monto } = req.body
    if (!numeroPoliza || !tipoSeguro || !titular || monto === undefined || monto === null) {
      return res.status(400).json({ msg: 'Todos los campos son obligatorios' })
    }
    const exists = await Policy.findOne({ numeroPoliza })
    if (exists) return res.status(409).json({ msg: 'numeroPoliza ya existe' })
    const policy = await Policy.create({ numeroPoliza, tipoSeguro, titular, monto })
    return res.status(201).json(policy)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ msg: 'Error al crear la póliza' })
  }
}

export const getPolicies = async (_req, res) => {
  try {
    const items = await Policy.find().sort({ createdAt: -1 })
    return res.json(items)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ msg: 'Error al listar pólizas' })
  }
}

export const getPolicyById = async (req, res) => {
  const { id } = req.params
  if (validateObjectId(id, res)) return
  const item = await Policy.findById(id)
  if (!item) return handleNotFound(res, 'La póliza no existe')
  return res.json(item)
}

export const updatePolicy = async (req, res) => {
  const { id } = req.params
  if (validateObjectId(id, res)) return
  try {
    if (req.body.numeroPoliza) {
      const dup = await Policy.findOne({ numeroPoliza: req.body.numeroPoliza, _id: { $ne: id } })
      if (dup) return res.status(409).json({ msg: 'numeroPoliza ya existe' })
    }
    const updated = await Policy.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    if (!updated) return handleNotFound(res, 'La póliza no existe')
    return res.json(updated)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ msg: 'Error al actualizar la póliza' })
  }
}

export const deletePolicy = async (req, res) => {
  const { id } = req.params
  if (validateObjectId(id, res)) return
  try {
    const deleted = await Policy.findByIdAndDelete(id)
    if (!deleted) return handleNotFound(res, 'La póliza no existe')
    return res.json({ msg: 'Póliza eliminada correctamente', id })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ msg: 'Error al eliminar la póliza' })
  }
}
