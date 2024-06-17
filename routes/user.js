import express from "express";
import { removeUser,getUser, getUsers, activeUsers, deactiveUsers, deactivateUser, activateUser } from "../controllers/userController.js";

const router = express.Router()

router.delete('/:id', removeUser)
router.get('/user/:id', getUser)
router.get('/users', getUsers)
router.get('/activeUsers', activeUsers)
router.get('/deactiveUsers', deactiveUsers)

router.put('/deactivate/:id', deactivateUser)
router.put('/activate/:id', activateUser)

export default router;