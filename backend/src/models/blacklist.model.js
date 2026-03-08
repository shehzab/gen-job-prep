const mongoose = require('mongoose')

const blacklistTTokenSchema = new mongoose.Schema({
  token:{
    type:String,
    required: [true,"Token is required to be added in blacklist"]
    }
  },{
    timestamps:true
})


const tokenBlacklistModel = mongoose.model("blacklistokens", blacklistTTokenSchema)

module.exports = tokenBlacklistModel