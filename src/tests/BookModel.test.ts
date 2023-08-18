import BookModel from "../model/bookModel";
import * as db from './dbHelper';

describe('Testing Base Service functionality', ()=>{
    beforeAll(async () => {

        await db.connect()
     });

     afterAll(async () => {
        await db.closeDatabase()
     });
 
  
    test('testing create function of mongoose model', async()=>{
        const book = new BookModel();
        book.name ="test";
        book.description ="test";
        book.language ="test";
        book.numberOfCopiesAvailable =10;
        const res = await BookModel.create(book);
        expect(res.name).toEqual("test");
    })

    test('testing find function of mongoose model', async()=>{

     const res = await BookModel.find();
     
     expect(res[0].numberOfCopiesAvailable).toEqual(10);
    })

})