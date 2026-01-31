import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import { JWT_PASSWORD } from "./config.js";

// declare global {
//   namespace Express {
//     interface Request {
//       userId?: string;
//     }
//   }
// }

export const useMiddleware = (req: Request, res: Response, next: NextFunction)=>{
    const header = req.headers.authorization;
    if (!header || typeof header !== "string" || !header.startsWith("Bearer ")) {
        res.status(401).json({ message: "Authorization header missing or malformed" });
        return;
    }

    const token = header.slice(7).trim();

    try {
        const decoded = jwt.verify(token, JWT_PASSWORD);
        if (typeof decoded === "string") {
            res.status(403).json({ message: "Invalid token payload" });
            return;
        }
        req.userId = (decoded as JwtPayload).id as string;
        next();
    } catch (e) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
}