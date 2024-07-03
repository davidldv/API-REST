import express from "express"
import { USERS_BBDD } from "../bbdd.js"

const accountRouter = express.Router()

accountRouter.use((req, res, next) => {
    console.log(req.ip)

    next()
})

// Obtener detalles de una cuenta
accountRouter.get("/:_id", (req, res) => {
    const { _id } = req.params
    const user = USERS_BBDD.find((user) => user._id === _id)

    if(!user) res.status(404).send("User not found")

    return res.send(user)
})

// Crear una nueva cuenta a partir de _id y name
accountRouter.post("", (req, res) => {
    const { _id, name } = req.body

    if (!_id || !name) return res.status(400).send("Id and name are required")

    const user = USERS_BBDD.find((user) => user._id === _id)
    if(user) return res.status(409).send("User already exists")

    USERS_BBDD.push({ _id, name })

    return res.send("User created")
})

// Actualizar el nombre de una cuenta
accountRouter.patch("/:_id", (req, res) => {
    const { _id } = req.params
    const { name } = req.body

    if (!name) return res.status(400).send("Name is required")

    const user = USERS_BBDD.find((user) => user._id === _id)

    if(!user) return res.status(404).send("User not found")

    user.name = name

    return res.send(user)
})

// Eliminar una cuenta
accountRouter.delete("/:_id", (req, res) => {
    const { _id } = req.params
    const userIndex = USERS_BBDD.findIndex((user) => user._id === _id)

    if(userIndex === -1) return res.status(404).send("User not found")

    USERS_BBDD.splice(userIndex, 1)

    return res.send("User deleted")
})

export default accountRouter