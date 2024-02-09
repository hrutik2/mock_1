const mongoose=require("mongoose")

const feedSchema=mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
       
        
      },
      title: {
        type: String,
        maxlength: 100,
       
      },
      category: {
        type: String,
        
       
      },
      content: {
        type: String,
       
      },
      media: [String],
      likes: [{
        type: mongoose.Schema.Types.ObjectId,
       
      }],
      comments: [{
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
        
        },
        content: String,
        created_at: {
          type: Date,
          default: Date.now
        }
      }],

},{timestamps:true,
  v:false
})

const feedModule=mongoose.model("feed",feedSchema)

module.exports={feedModule}