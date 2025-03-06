import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { AuthService } from "./auth.service";
import sendResponse from "../../../shared/sendResponse";


const createAdmin = catchAsync(async (req: Request, res: Response) => {
   const result = await AuthService.createAdminIntoDB(req);
   sendResponse(res,
    {
        statusCode: 200,
        success: true,
        message: 'Admin created successfully',
        data: result
    }
   )
});


const getAdmin = catchAsync(async (_req: Request, res: Response) => {
    const result = await AuthService.getAllAdminFormDB();
    sendResponse(res,
     {
         statusCode: 200,
         success: true,
         message: 'Admin retrieved successfully',
         data: result
     }
    )
 });


export const AuthController ={
    createAdmin,
    getAdmin
}