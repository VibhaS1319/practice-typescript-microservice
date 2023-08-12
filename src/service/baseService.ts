import { Request, Response } from "express";
import sanitize from 'mongo-sanitize';

export default class baseService {
    
    getAllData =async( model:any)=>{
        const filter = {};
        const all =  await model.find();
        return all;
    }

    saveData = async (model: any, data:any )=>{
      return await model.create(sanitize(data));
    }

}