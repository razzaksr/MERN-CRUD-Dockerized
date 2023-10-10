const mongoose=require('mongoose')

// const uri = "mongodb+srv://razak:mohamed@scriptmani.q77zz.mongodb.net/manikandan?retryWrites=true&w=majority";
// const uri = "mongodb+srv://razak:mohamed@cluster0.ptmlylq.mongodb.net/forenoon?retryWrites=true&w=majority"
const uri = "mongodb://mongodb:27017/new-mongo"

mongoose.connect(uri)

require('./techie.model')