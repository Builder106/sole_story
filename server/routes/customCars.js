import express from 'express'
import { createCar, deleteCar, getCarById, getCars, updateCar } from '../controllers/customCars.js'

const router = express.Router()

router.get('/', getCars)
router.get('/:id', getCarById)
router.post('/', createCar)
router.put('/:id', updateCar)
router.delete('/:id', deleteCar)

export default router
