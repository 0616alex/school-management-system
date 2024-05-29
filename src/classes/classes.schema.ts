import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Teacher } from '../teacher/teacher.schema';
import { Student } from '../student/student.schema';

@Schema()

export class Classes {
    @Prop()
    standard:string
    @Prop()
    section:string
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' })
    teacher: Teacher[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }] })
  students: Student[];
}

export const clasesSchema = SchemaFactory.createForClass(Classes)