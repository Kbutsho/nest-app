/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
    @Get()
    getTeachers() {
        return "All Teachers"
    }
    @Get('/:teacherId')
    getTeacherById(){
        return "Get teacher by Id"
    }
    @Post()
    createTeacher(){
        return "Create Teacher"
    }
}
