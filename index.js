import express from "express"
import cors from 'cors'
import { dbConnection } from "./database/dbConnection.js"
import router from "./src/modules/users/user.router.js"
import routerIllnesses from "./src/modules/illnesses.js/illness.router.js"
const app = express()
const port = 3000

dbConnection()
app.use(cors())
app.use(express.json())

app.use(router)
app.use(routerIllnesses)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))