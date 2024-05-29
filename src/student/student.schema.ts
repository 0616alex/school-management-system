import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Parent } from '../parent/parent.schema';
import { Classes } from '../classes/classes.schema';

@Schema()
export class Student {
    @Prop()
    name:string
    @Prop()
    age:number
    @Prop()
    gender:string
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Parent' })
    parent: Parent;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Classes' }] })
  classes: Classes[];
}

export const StudentSchema = SchemaFactory.createForClass(Student);
