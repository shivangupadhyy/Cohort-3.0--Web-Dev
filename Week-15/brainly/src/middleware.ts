import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";

export const useMiddleware = (req: Request, res: Response, next: NextFunction)=>{
    const header = req.headers.authorization;
    const decoded = jwt.verify(header as string, "secret");
}