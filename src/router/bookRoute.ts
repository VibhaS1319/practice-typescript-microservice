import express from "express";
import bodyParser from 'body-parser';
import BookController  from "../controller/BookController";
const router = express.Router();

router.get('/allBooks',bodyParser.json(),  (req, res) =>{new BookController().getAllBooks(req, res)});

router.post('/saveBook',bodyParser.json(),  (req, res) =>{new BookController().saveBook(req, res)});

export default router;