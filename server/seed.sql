DROP TABLE IF EXISTS movies cascade;

CREATE TABLE tickets(
  id serial primary key,
  title VARCHAR(30),
  genre VARCHAR(30),
  actor VARCHAR(30),
  actress VARCHAR(30),
  rating INT,
  star BOOLEAN,
  status BOOLEAN
);
