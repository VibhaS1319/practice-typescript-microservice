import request from "supertest";
import app from '../server';
import * as db from './dbHelper';
import mongoose from "mongoose";

describe('Testing Book Route functionality', ()=>{
    beforeAll(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await db.connect()
     });
     afterEach(async () => {
        await db.clearDatabase()
     });
     afterAll(async () => {
        await db.closeDatabase()
     });

    test('testing allBooks routing functionality', async()=>{
        const res = await request(app).get("/api/allBooks");
        expect(res.status).toBe(200);
    })

    test('testing allBooks routing functionality', async()=>{
        const payload = {
            "name":"Rich Dad Poor Dad",
            "description":"This book is on Financial Management",
            "language":"English",
            "numberOfCopiesAvailable":20
        };
        const res = await request(app).post("/api/saveBook").send(payload)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');
        expect(res.status).toBe(201);
  
    })

})