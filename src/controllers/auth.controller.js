const userModel = require("../models/user.model")

/**
 * 
 * @name registerUserController
 * @description register a new user, expects username, email and password in the required
 * @access Public
 */

async function registerUserController(req,res){

  const { username, email, password} = req.body

  if(!username || !email || !password){
    return res.status(400).json({
      mssage: "Please provide username, email and password"
    })
  }

  const isUserAlreadyExists = await userModel.findOne({
    $or:[{ username },{ email }]
  })


  if(isUserAlreadyExists){
    
    /* isUserAlreadyExists.name == username */
    return res.status(400).json({
      message:"Account already exists with this email id or user na"
    })
  }

}

module.exports = {
  registerUserController
}