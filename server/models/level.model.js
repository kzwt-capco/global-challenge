/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Level Schema
 */
var LevelSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    activities: {
        Walk: Number,
        Run: Number,
        Swim: Number, 
        Cycling: Number,
        CyclingConverted: Number,
        Rowing: Number
    },
    members: [],
    avatar: String,
    totalDistance: Number,
    totalDistanceConverted: Number,
    totalDuration: Number,
    
}, {strict: false});

LevelSchema.statics = {
  load: function (id, cb) {
    this.findOne({ _id : id }).exec(cb);
  }
};

var Level = mongoose.model('Level', LevelSchema);
