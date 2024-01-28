import express from "express"
import {   deleteUser, getAllUser, getOneUser, signIn, signUp, updateUser } from "./user.controller.js"

let router = express.Router()

router.get("/users", getAllUser)
router.get("/user/:_id", getOneUser)
router.delete("/delete/:_id", deleteUser)
router.put("/update",updateUser)
router.post("/signUp", signUp)
router.post("/signIn", signIn)



export default router