const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connection = 'postgres://localhost:5432/movies';

var client = new pg.Client(connection);
client.connect();

exports.submitMovie = (req, res) => {
  const results = [];
  const movie = req.body;
  const query = client.query('INSERT INTO movies(title, genre, actor, actress, rating) values ($1, $2, $3, $4, $5)', [movie.title, movie.genre, movie.actor, movie.actress, movie.rating]);
  query.on('row', (row) => {
    results.push(row);
  })
  query.on('end', () => {
    return res.json(results);
  });
};

exports.getOpenMovies = (req, res) => {
  const movies = [];
  const query = client.query('SELECT * FROM movies');
  query.on('row', (row) => {
    movies.push(row);
  });
  query.on('end', () => {
    return res.json(movies);
  });
};

exports.getStaredMovies = (req, res) => {
  const starMovies = [];
  const query = client.query('SELECT * FROM movies WHERE star = true');
  query.on('row', (row) => {
    starMovies.push(row);
  });
  query.on('end', () => {
    return res.json(starMovies);
  });
};

exports.updateMovie = (req, res) => {
  const results = [];
  const id = req.body.id;
  const movie = Object.assign({}, req.body, { star: !req.body.star })
  const query = client.query('UPDATE movies SET star = $1 WHERE id = $2', [movie.star, id]);
  query.on('row', (row) => {
    results.push(row);
  })
  query.on('end', () => {
    return res.json(results);
  });
};


exports.deleteMovie = (req, res) => {
  const results = [];
  const query = client.query('DELETE FROM movies WHERE movies.id = $1', [req.body.id]);
  query.on('row', (row) => {
    results.push(row);
  })
  query.on('end', () => {
    return res.json(results);
  });
};

