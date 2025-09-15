import express from 'express'
import { createPolicy, getPolicies, getPolicyById, updatePolicy, deletePolicy } from '../controllers/policiesController.js'

const router = express.Router()

router.post('/', createPolicy)
router.get('/', getPolicies)
router.get('/:id', getPolicyById)
router.put('/:id', updatePolicy)
router.delete('/:id', deletePolicy)

export default router
