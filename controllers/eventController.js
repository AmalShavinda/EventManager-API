import Event from "../models/Event.js";
import User from "../models/User.js";
import createError from "../utils/error.js";

export const createEvent = async (req, res, next) => {
    try {
        const event = new Event({
            ...req.body
        })
        await event.save()
        res.status(201).send("Event has been created")
    } catch (error) {
        next(error)
    }
}

export const removeEvent = async (req, res, next) => {
    try {
        await Event.findByIdAndDelete(req.params.id)
        res.status(200).send("Event has been deleted")
    } catch (error) {
        next(error)
    }
}

export const getEvents = async (req, res, next) => {
    try {
        const getEvents = await Event.find()
        res.status(200).json(getEvents)
    } catch (error) {
        next(error)
    }
}

export const updateCoordinator = async (req, res, next) => {
    try {
        const coordinator = await Event.findByIdAndUpdate(req.params.id, {coordinator: req.body.coordinator})
        res.status(200).json(coordinator)
    } catch (error) {
        next(error)
    }
}


export const myEvents = async (req, res, next) => {
    try {
        const userId = req.params.id
        const myEvents = await Event.find({coordinator: userId})
        res.status(200).json(myEvents)
    } catch (error) {
        next(error)
    }
}

export const updateStatus = async (req, res, next) => {
    try {
        const status = await Event.findByIdAndUpdate(req.params.id, {status: req.body.status}, {new: true})
        res.status(200).json(status)
    } catch (error) {
        next(error)
    }
}