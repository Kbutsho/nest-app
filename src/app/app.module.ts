import { StudentTeacherController } from './../teacher/student.controller';
import { TeacherController } from './../teacher/teacher.controller';
import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherController],
})
export class AppModule {}
