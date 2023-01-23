/* eslint-disable prettier/prettier */
import { Controller, Get,Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    @Get('')
    getStudents(){
        return "get all student that belong to a teacher"
    }
    @Put('/:studentId')
    updateStudentTeacher(){
        return "update teacher's student by student id"
    }
}
