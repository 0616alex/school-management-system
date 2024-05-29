import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Classes } from '../classes/classes.schema';

@Schema()

export class Teacher {
    @Prop()
    name:string;
    @Prop()
    age:string;
    @Prop()
    gender:string;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Classes' }] })
    classes: Classes[];
}

export const teacherSchema = SchemaFactory.createForClass(Teacher);

