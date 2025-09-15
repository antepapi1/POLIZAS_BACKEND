import mongoose from 'mongoose'

export function validateObjectId(id, res){
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({ msg: 'ID no válido' })
  }
}

export function handleNotFound(res, message='Recurso no encontrado'){
  return res.status(404).json({ msg: message })
}
