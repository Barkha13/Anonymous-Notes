var mongoose = require('mongoose');
var Note = mongoose.model('Note');

module.exports = {

    show : function(req,res){
        Note.find({}, function(err, notes){
            console.log(notes);
            res.json(notes);
        })
    },

    create : function(req, res){
        console.log('you are heree.....',req.params.note);
        var note = new Note({ note : req.params.note});
        note.save(function(err){
            if(err){
                console.log("something went wrong...");
            }
            else{
                console.log('added note...');
                res.redirect('/');
            }
        })
    }
}