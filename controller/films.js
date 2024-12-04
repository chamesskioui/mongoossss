const films=require("../model/model")
const addfilm=async(req,res)=>{
    try {
        const film=new films(req.body)
        await film.save()
        res.status(200).send({msg:"movie is saved",filmname:film.title})
    } catch (error) {
        res.status(500).send({msg:"movie is not saved",error})
    }
}
module.exports={addfilm

}