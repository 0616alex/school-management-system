import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './student.schema';

@Module({
    imports:[MongooseModule.forFeature([{name:'student',schema:StudentSchema}])],
    providers: [],
})
export class StudentModule {}
