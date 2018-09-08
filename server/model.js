const goose = require("mongoose");


goose.connect("mongodb://localhost:27017/MongooseDash", {useNewUrlParser: true},(errs)=> console.log(errs?errs:"db MongooseDash"));

const Dashboard = new goose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "yo give a larger name"]
    },
    color:{
        type:String,
        required:true,
    },
    age:{
        type: Number,
        required:true
    }

},{timestamps:true});

const Dash = goose.model('mongoose', Dashboard);

module.exports = Dash ;