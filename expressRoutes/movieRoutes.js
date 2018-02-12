var express = require('express');
var app = express();
var movieRoutes = express.Router();

// Require Movie model in our routes module
var Movie = require('../models/Movie');


// Defined store route
movieRoutes.route('/add').post(function (req, res) {
  var movie = new Movie(req.body);
      movie.save()
    .then(movie => {
    res.status(200).json({'movie': 'Movie added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
movieRoutes.route('/').get(function (req, res) {
  Movie.find(function (err, movies){
    if(err){
      console.log(err);
    }
    else {
      res.json(movies);
    }
  });
});

// Defined edit route
movieRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Movie.findById(id, function (err, movie){
      res.json(movie);
  });
});

// Defined details route
movieRoutes.route('/details/:id').get(function (req, res) {
  var id = req.params.id;
  Movie.findById(id, function (err, movie){
      res.json(movie);
  });
});

//  Defined update route
movieRoutes.route('/update/:id').post(function (req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    if (!movie)
      return next(new Error('Could not load Document'));
    else {
      movie.title = req.body.title;
      movie.year = req.body.year;
      movie.language = req.body.language;
      movie.director = req.body.director;
      movie.nationality = req.body.nationality;
      movie.birthDate = req.body.birthDate;
      movie.genre = req.body.genre;
      movie.synopsys = req.body.synopsys;
      movie.mark = req.body.mark;

      movie.save().then(movie => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
movieRoutes.route('/delete/:id').get(function (req, res) {
  Movie.findByIdAndRemove({_id: req.params.id}, function(err, movie){
		if(err) res.json(err);
		else res.json('Successfully removed');
	});
});

module.exports = movieRoutes;
