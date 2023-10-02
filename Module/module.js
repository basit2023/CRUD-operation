import mongoose from 'mongoose'

const itemSchema= new mongoose.Schema({
  name:{
    type:String
  },
  email:{
    type:String,
  },
  age:{
    type: String,
  }

})
const userModel =mongoose.model('user',itemSchema);
export default userModel;