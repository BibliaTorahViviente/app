-- schema.sql
CREATE TABLE books (
  id INTEGER PRIMARY KEY,
  name_spanish TEXT,
  name_hebrew TEXT, 
  name_phonetic TEXT,
  section TEXT
);

CREATE TABLE chapters (
  id INTEGER PRIMARY KEY,
  book_id INTEGER,
  chapter INTEGER,
  content TEXT,
  FOREIGN KEY(book_id) REFERENCES books(id)
);

CREATE TABLE verses (
  id INTEGER PRIMARY KEY,
  book_id INTEGER,
  chapter INTEGER,
  verse INTEGER,
  content TEXT,
  FOREIGN KEY(book_id) REFERENCES books(id)
);