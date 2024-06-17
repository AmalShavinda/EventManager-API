import express from "express";
import { createEvent, removeEvent, getEvents, updateCoordinator, myEvents, updateStatus } from "../controllers/eventController.js"
 
const router = express.Router()

router.post('/create', createEvent)
router.delete('/:id', removeEvent)
router.get('/events', getEvents)
router.put('/coordinator/:id', updateCoordinator)
router.get('/myEvents/:id', myEvents)
router.put('/status/:id', updateStatus)

export default router;