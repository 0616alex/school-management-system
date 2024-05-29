import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { teacherSchema } from './teacher.schema';


@Module({
    imports:[MongooseModule.forFeature([{name:'teacher',schema:teacherSchema}])],
})
export class TeacherModule {}
