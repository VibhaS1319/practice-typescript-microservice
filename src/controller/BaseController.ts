import { Request, Response } from "express";
import baseService from "../service/baseService";

export default class BaseController{
   
    //  model:any;
    // constructor(model:any){
    //     model = model;
    //     console.log("model: "+model);
    // }

     getAllData= async (req: Request, res: Response<any>, model:any) =>{
        const allData = await new baseService().getAllData(model);
        return allData;
     }

     saveData(req: Request, res: Response<any>, model:any){

        const data = new baseService().saveData(model, req.body);
        console.log("check data: "+JSON.stringify(data));
        return data;
     }
}