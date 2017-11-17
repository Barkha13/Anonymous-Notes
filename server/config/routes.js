var notes = require('./../controllers/notes.js');
var path = require('path');

module.exports = function(app){

    app.get('/notes', function(req,res){
        console.log('root route');
        notes.show(req,res);
    });

    app.post('/notes/:note',function(req, res){
        notes.create(req,res);
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });



};