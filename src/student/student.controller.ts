/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }
    @Get()
    getStudents(): FindStudentResponseDto[] {
        return this.studentService.getStudents()
    }
    @Get('/:studentId')
    getStudentById(
        // @Param() params: { studentId: string }
        @Param('studentId', new ParseUUIDPipe()) studentId: string
    ): FindStudentResponseDto {
        return this.studentService.getStudentById(studentId)
        // return `Get student by Id ${params.studentId}`
    }
    @Post()
    createStudent(
        @Body() body: CreateStudentDto
        // @Body() body: {
        //     name: string,
        //     email: string
        // }
    ): StudentResponseDto {
        return this.studentService.createStudent(body)
    }
    @Put('/:studentId')
    updateStudent(
        @Param('studentId',new ParseUUIDPipe()) studentId: string,
        @Body() body: UpdateStudentDto
    ): StudentResponseDto {
        return this.studentService.updateStudent(body, studentId)
    }
}