const Admin = require("../Model/admin");

exports.admin = async (req, res) => {

    try{
        const user = await Admin.find()
        res.send(user)
    }catch(err){
        res.status(500).send(err.message)
    }
  
};