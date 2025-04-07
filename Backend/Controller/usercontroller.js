const Users = require("../Model/userauth");

exports.createUser = async (req, res) => {
  try {
    
    const user = new Users(req.body);
    await user.save();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.getAllUser = async (req, res) => {

    try{
        const user = await Users.find()
        res.send(user)
    }catch(err){
        res.status(500).send(err.message)
    }
  
};

exports.deleteUser = async(req, res)=>{

  try{
    const user = await Users.findByIdAndDelete(req.params.id);
    if(!user) return res.status(404).send("User not found");

    return res.status(200).send("User deleted successfully!")
  }
  catch(err){
    return res.status(500).send(err.message)
  }

}