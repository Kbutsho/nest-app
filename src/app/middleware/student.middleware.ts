/* eslint-disable prettier/prettier */
import { HttpException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { students } from "src/db";

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("this middleware is called")
        const studentId = req.params.studentId;
        const Exist = students.some(student => {
            return student.id === studentId
        })
        if (!Exist) {
            throw new HttpException("Student not found", 400)
        }
        next()
    }
}