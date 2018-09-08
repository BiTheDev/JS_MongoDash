const {home, mongoose,edit, newMongoose,create,postEdit,destroy} = require("./controller.js");

function router(app)
{
    app.get("/", home);
    
    app.get("/mongooses/new", newMongoose);
    app.get("/mongooses/:id", mongoose);
    app.post("/mongooses", create);
    app.get("/mongooses/edit/:id",edit);
    app.post("/mongooses/:id", postEdit);
    app.post("/mongooses/destroy/:id", destroy);

}

module.exports = router;