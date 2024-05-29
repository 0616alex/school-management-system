import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
// export type ParentDocument = Parent & mongoose.Document;
import { Student } from '../student/student.schema';

@Schema()
export class Parent {
    @Prop({ required: true })
    name:string
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }] })
    children: Student[];
}

export const ParentSchema = SchemaFactory.createForClass(Parent)

