const mongoose = require("mongoose")

const dbConnect = async(req,res)=>{
    try {
        await mongoose.connect(process.env.DB)
        console.log("DB Connected successfully")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect