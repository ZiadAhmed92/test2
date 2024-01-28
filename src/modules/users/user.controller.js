import { userModel } from "../../../database/model/user.model.js"
import bcrypt from "bcrypt"

let signUp = async (req, res) => {
    const { first_name, last_name, gender, birthday, phone, email, password } = req.body

    const user = await userModel.findOne({ email })

    if (user) return res.json({ message: "Email Is Already Exist" })

    bcrypt.hash(password, 8, async function (err, hash) {
        if (err) return console.log(err)
        await userModel.insertMany({ first_name, last_name, birthday, gender, phone, email, password: hash })
        res.json({ message: "success" })
    });


}


let signIn = async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (user) {

        const match = await bcrypt.compare(password, user.password);
        console.log(match)
        if (match) {

            res.json({ message: "login", user })
        } else {
            res.json({ message: "Password Not Valid" })
        }
    } else {
        res.json({ message: "Email Not Found" })
    }




}

let getOneUser = async (req, res) => {
    const { _id } = req.params
    const user = await userModel.findOne({ _id })
    res.json({ message: "success", users: user })
}
let getAllUser = async (req, res) => {

    const user = await userModel.find()
    res.json({ message: "success", users: user })
}

let deleteUser = async (req, res) => {
    const { _id } = req.params
    await userModel.findOneAndDelete({ _id })
    res.json({ message: "success" })
}


let updateUser = async (req, res) => {
    const { _id, first_name, last_name, gender, birthday, phone } = req.body

    let user = await userModel.findOneAndUpdate({ _id }, { first_name, last_name, gender, birthday, phone })

    res.json({ message: "success", user })


}


export {
    signUp,
    signIn,
    getAllUser,
    deleteUser,
    updateUser,
    getOneUser

}