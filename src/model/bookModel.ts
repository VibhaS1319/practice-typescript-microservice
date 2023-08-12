import { Schema, model } from 'mongoose';

interface Books{
    name: string,
    description: string,
    language: string,
    numberOfCopiesAvailable: number
}


const BooksSchema = new Schema<Books>({
    name:{type:String, required: true},
    description:{
        type:String, required: true
    },
    language:{type:String},
    numberOfCopiesAvailable:{type: Number}
})

const BookModel = model<Books>('books', BooksSchema);
export default BookModel;