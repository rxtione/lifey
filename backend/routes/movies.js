var express = require('express');
var router = express.Router();
var movies = require('../movies.json');

router.get('/', function (req, res, next) {
  //res.send(movies);
  glb_pool.getConnection(function(err,connection){

		var sql = "select ?? from tb_movies order by id desc;";
		var columns = ['id', 'name', 'year', 'director', 'poster'];
		connection.query(sql, [columns], function (err, rows) {

			connection.release();

			if (err) {
				console.error(err);
				res.json({result:0, list: rows, error: err});
				return;
			}

			res.json(rows);
		});
	});
});

router.get('/:id', function (req, res, next) {
  var id = parseInt(req.params.id, 10)
  var movie = movies.filter(function (movie) {
    return movie.id === id
  });
  res.send(movie)
});

module.exports = router;