BEGIN;

DROP TABLE IF EXISTS users, events, programs, halls CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  role INT NOT NULL
);

CREATE TABlE events (
  id SERIAL PRIMARY KEY,
  hall_id INT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  title VARCHAR NOT NULL,
  speaker VARCHAR NOT NULL,
  image_url VARCHAR,
  description_title VARCHAR,
  description_text VARCHAR
);

CREATE TABLE halls (
  id SERIAL PRIMARY KEY,
  hall_name VARCHAR
);

CREATE TABLE programs (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL UNIQUE,
  description VARCHAR,
  image_url VARCHAR,
  contact_persons VARCHAR
);

COMMIT;
