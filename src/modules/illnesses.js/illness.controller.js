import { illnessModel } from "../../../database/model/illness.model.js"


let addIllness = async (req, res) => {
    const { name, illness, code } = req.body
    const illnesses = await illnessModel.findOne({ illness })

    if (illnesses) return res.json({ message: "illnesses Is Already Exist" })

    await illnessModel.insertMany({ name, illness, code })
    res.json({ message: "success" })

}

let getOneIllness = async (req, res) => {
    const { _id } = req.params
    const illness = await illnessModel.findOne({ _id })
    res.json({ message: "success", data: illness })
}
let getAllIllnesses = async (req, res) => {

    const illness = await illnessModel.find()
    res.json({ message: "success", data: illness })
}

let deleteIllness = async (req, res) => {
    const { _id } = req.params
    await illnessModel.findOneAndDelete({ _id })
    res.json({ message: "success" })
}


let updateIllness = async (req, res) => {
    const { _id ,name, illness, code } = req.body

    let data = await illnessModel.findOneAndUpdate({ _id }, { name, illness, code })

    res.json({ message: "success", data })


}


export {

    addIllness,
    getAllIllnesses,
    deleteIllness,
    updateIllness,
    getOneIllness

}