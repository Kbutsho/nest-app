/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
    @Get()
    getStudents() {
        return "All Student"
    }
    @Get('/:studentId')
    getStudentById(){
        return "Get student by Id"
    }
    @Post()
    createStudent(){
        return "Create student"
    }
    @Put('/:studentId')
    updateStudent(){
        return "Update Student"
    }
}