// api/bible.js
import express from "express";
import sqlite3 from "sqlite3";

const router = express.Router();
const db = new sqlite3.Database("./bible.db");

// Obtener libros
router.get("/books", (req, res) => {
  db.all("SELECT * FROM books", (err, rows) => {
    res.json(rows);
  });
});

// Obtener capítulo
router.get("/chapter/:book/:chapter", (req, res) => {
  db.get(
    "SELECT content FROM chapters WHERE book_id = ? AND chapter = ?",
    [req.params.book, req.params.chapter],
    (err, row) => {
      res.json(row);
    }
  );
});

// Búsqueda
router.get("/search", (req, res) => {
  db.all(
    "SELECT * FROM verses WHERE content LIKE ?",
    [`%${req.query.q}%`],
    (err, rows) => {
      res.json(rows);
    }
  );
});
