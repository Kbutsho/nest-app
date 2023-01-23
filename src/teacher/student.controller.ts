/* eslint-disable prettier/prettier */
import { Controller, Get,Param,Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    @Get('')
    getStudents(){
        return "get all student that belong to a teacher"
    }
    @Put('/:studentId')
    updateStudentTeacher(
        @Param('studentId') studentId: string,
        @Param('teacherId') teacherId: string
    ){
        return `update teacher's ${teacherId} student by student id ${studentId}`
    }
}
