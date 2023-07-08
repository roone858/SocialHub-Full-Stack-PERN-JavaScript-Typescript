import { Response, Request,ErrorRequestHandler } from 'express';
const ErrorHandler = (err:any, req:any, res:any, next:any) => {
     console.log("Middleware Error Hadnling");
     const errStatus = err.statusCode || 500;
     const errMsg = err.message || 'Something went wrong';
     res.status(errStatus).json({
         success: false,
         status: errStatus,
         message: "internal server error",
         stack: process.env.NODE_ENV === 'development' ? err.stack : {}
     })
 }
 
 export default ErrorHandler