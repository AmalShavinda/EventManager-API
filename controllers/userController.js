import User from "../models/User.js";

export const removeUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).send("User has been deleted")
    } catch (error) {
        next(error)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const getUsers = await User.findById(req.params.id)
        res.status(200).json(getUsers)
    } catch (error) {
        next(error)
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const getUsers = await User.find()
        res.status(200).json(getUsers)
    } catch (error) {
        next(error)
    }
}

export const activeUsers = async (req, res, next) => {
    try {
        const getUsers = await User.find({status: "Active"})
        res.status(200).json(getUsers)
    } catch (error) {
        next(error)
    }
}

export const deactiveUsers = async (req, res, next) => {
    try {
        const getUsers = await User.find({status: "Deactive"})
        res.status(200).json(getUsers)
    } catch (error) {
        next(error)
    }
}

export const deactivateUser = async (req, res, next) => {
    try {
        const deactivateUser = await User.findByIdAndUpdate(req.params.id, {status: req.body.status}, {new: true})
        res.status(200).json(deactivateUser)
    } catch (error) {
        next(error)
    }
}

export const activateUser = async (req, res, next) => {
    try {
        const activateUser = await User.findByIdAndUpdate(req.params.id, {status: req.body.status}, {new: true})
        res.status(200).json(activateUser)
    } catch (error) {
        next(error)
    }
}