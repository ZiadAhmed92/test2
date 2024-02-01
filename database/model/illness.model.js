
import mongoose from "mongoose";

let illnessSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name required']
  },
  illness: {
    type: String,
    required: [true, 'illness required']
  },
  code: {
    type: String,
    required: [true, 'code required']
  }

})

export const illnessModel = mongoose.model('illnesse', illnessSchema)