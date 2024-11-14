const express = require("express");
const router = express.Router();
const posts = require("../Model/post");

router.use(express.json());

// to add blog
router.post('/add',async(req,res)=>{
    try {
        const post = req.body;
        const data = await posts(post).save();
        res.status(200).send({message:"blog addedd"})
        console.log(data)

    } catch (error) {
        console.log(error)
    }
})

module.exports=router