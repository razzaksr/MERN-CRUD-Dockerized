const mongoose=require('mongoose')

const techieSchema=mongoose.Schema({
    fullname:{
        type:String
    },
    experience:{
        type:Number
    },
    commercials:{
        type:Number
    },
    expert:{
        type:String
    },
    contact:{
        type:Number
    }
});

module.exports=mongoose.model('techie',techieSchema)