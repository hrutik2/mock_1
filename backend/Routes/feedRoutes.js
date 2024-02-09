const express=require("express")
const { feedModule } = require("../module/feedmodules")
const {Athentication}=require("../middleware/Authetication")
const feed=express.Router()

feed.get("/posts",async(req,res)=>{
   
    try {
        const feed= await feedModule.find(req.query)
        res.status(200).send({data:feed})
    } catch (error) {
        res.send(error)
    }
})

feed.post("/posts",Athentication,async(req,res)=>{
     console.log(req.body)
    try {
        const feed=new feedModule(req.body)
        await feed.save()
        res.status(201).send({"mag":"new  post added sucessfully"})
    } catch (error) {
        res.send(error)
    }
})

feed.patch("/posts/:id",async(req,res)=>{
    const  id=req.params.id;
    try {
        const feed=await feedModule.findOneAndUpdate({_id:id},req.body)
        if (!feed) {
         res.status(400).send({ "mag": "feed Not FOund"});
          }
        else{
            res.status(204).send({ "mag": "feed is updated"})
        }
      
    }
    catch(error){
        res.send(error)
    }  
    

})

feed.delete("/posts/:id",async(req,res)=>{
    const id=req.params.id;
    try {
        const feed=await feedModule.findOneAndDelete({_id:id})
        res.status(204).send({ "mag": "feed is deleted"})
    } catch (error) {
        res.send(error)
    }
})
feed.post("/posts/:post_id/like",Athentication, async (req, res) => {
    const { post_id } = req.params; // Corrected parameter name to post_id
    try {
        const feed = await feedModule.findOne({ _id: post_id }); 
        //console.log(feed)
        if (!feed) {
            return res.status(404).json({ error: 'Post not found' });
        }
        const like = feed.likes;
         like.push(req.body.user_id)
        console.log(like)
        await feedModule.findOneAndUpdate({_id:post_id},{likes:like})
        res.status(200).json({ message: 'Post liked successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

feed.post("/posts/:post_id/comment",Athentication, async (req, res) => {
    const { post_id } = req.params; // Corrected parameter name to post_id
    try {
        const feed = await feedModule.findOne({ _id: post_id }); 
        //console.log(feed)
        if (!feed) {
            return res.status(404).json({ error: 'Post not found' });
        }
        const comment = feed.comments;
         comment.push(req.body)
       
        await feedModule.findOneAndUpdate({_id:post_id},{comments:comment})
        res.status(200).json({ message: 'Post commented successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports={feed}