var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Movies
var Movie = new Schema({
  title: {
    type: String
  },
  year: {
    type: Number
  },
  language: {
    type: String
  },
  director: {
    type: String
  },
  nationality: {
    type: String
  },
  birthDate: {
    type: Date
  },
  genre: {
    type: String
  },
  synopsys: {
    type: String
  },
  mark: {
    type: Number
  },
},{
	collection: 'movies'
});

module.exports = mongoose.model('Movie', Movie);
