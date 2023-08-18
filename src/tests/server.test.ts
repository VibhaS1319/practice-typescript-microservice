import request from "supertest";
import app from '../server';
import mongoose from "mongoose";
import * as db from './dbHelper';
describe('Testing server.ts functionality', ()=>{

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


    test('testing default URL routing', async()=>{
        const res = await request(app).get("/");
        expect(res.text).toEqual('Hey, Congratualtions for completing set up!');
        
    })

})