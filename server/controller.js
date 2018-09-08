module.exports = {
    home: home,
    mongoose: Mongoose,
    newMongoose: NewMongoose,
    create: Create,
    edit:Edit,
    postEdit : PostEdit,
    destroy : Destroy
}

const Dash = require("./model.js");

function home(req,res){
    console.log("hit root route");
    Dash.find({}, function(errs, data){
        if(errs){
            console.log(errs);
        }else{
            console.log(data);
            
        }
        res.render("index" , {data : data.reverse()});
    })
}

function Mongoose(req,res){
    console.log("hit mongoose route");
    console.log(req.params.id);
    
    Dash.find({_id : req.params.id}, function(errs, data){
        if(errs){
            console.log(errs);
        }else{
            console.log(data);
            
        }
        res.render("mongoose" , {data : data});
    })
}

function NewMongoose(req,res){
    console.log("hit new mongoose route");
    res.render("newMongoose");
}

function Create(req, res){
    console.log("hit Create route");
    Dash.create(req.body, (errs,results)=>{
        if(errs){
            console.log("You Suck");
            console.log(errs);
            for(var key in errs.errors){
                req.flash('validation', errs.errors[key].message);
            }
            res.redirect("/mongooses/new")
        }else{
            console.log(results);
            res.redirect("/");
            
        }
    })
}
function Edit(req,res){
    console.log("hit edit route");
    console.log(req.params);
    Dash.find({_id: req.params.id}, (errs, data)=>{
        console.log(req.params.id);
        console.log(data);
        if(errs){
            // console.log(errs);
            console.log("You sucks!");
            res.redirect('/');
        }else{
            // console.log(data);
            res.render("editMongoose", {data : data});
        }
    });
}

function PostEdit(req,res){
    console.log("hit the post edit route");
    console.log(req.params.id)
    Dash.update({_id:req.params.id}
        , {name : req.body.name, 
            color : req.body.color, 
            age : req.body.age}, 
            (errs,results)=> {
        if(errs){
            console.log("You Suck");
            console.log(errs);
            
        }else{
            console.log("result");
            
        }
        res.redirect("/mongooses/" + req.params.id)
    })
}
function Destroy(req,res){
    console.log("hit the destroy route");
    console.log(req.params.id)
    Dash.deleteOne({_id: req.params.id}, (errs,results)=>{
        if(errs){
            console.log("You Suck");
            console.log(errs);
            
        }else{
            console.log(results);
            
        }
        res.redirect("/");
    })
}