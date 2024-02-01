import express from "express"
import {

  addIllness,
  getAllIllnesses,
  deleteIllness,
  updateIllness,
  getOneIllness

} from "./illness.controller.js"

let routerIllnesses = express.Router()

routerIllnesses.get("/illnesses", getAllIllnesses)
routerIllnesses.get("/illness/:_id", getOneIllness)
routerIllnesses.delete("/illnessDelete/:_id", deleteIllness)
routerIllnesses.put("/illnessUpdate", updateIllness)
routerIllnesses.post("/addIllnesses", addIllness)




export default routerIllnesses