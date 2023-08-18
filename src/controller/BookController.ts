import BaseController from './BaseController'
import BookModel from '../model/bookModel'
import { Request, Response } from "express";


export default class BookController extends BaseController{

       getAllBooks= async(req: Request, res: Response<any>)=> {
        const allBooks = await new BookController().getAllData(req, res, BookModel);
        return res.status(200).send(allBooks);
        }

        saveBook(req:Request, res:Response<any>){
          
            const newBook = new BookController().saveData(req, res, BookModel);
            return res.status(201).send(newBook);
        }

}
