import express from 'express';
import { createNota, deleteNota, getAllNotas, getNota, updateNota } from '../controllers/AgendaController.js';
const router = express.Router()

router.get('/', getAllNotas);
router.get('/:id', getNota);
router.post('/', createNota);
router.put('/:id', updateNota);
router.delete('/:id', deleteNota);

export default router;