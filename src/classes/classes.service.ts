import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Classes } from '../classes/classes.schema';

@Injectable()
export class ClassesService {

    constructor(
        @InjectModel (Classes.name) private classesModel:Model<Classes> ) {
        }

    async assignTeacherToClass(data) {

        try {
            const checkIfTheTeacherIsAlreadyAssigned = await this.classesModel.find({_id:data.classId,assignedTeachers:{'$in':[data.teacherId]}})

            if(checkIfTheTeacherIsAlreadyAssigned.length>=1) return 'teacher already assigned to the class';

            const assignTeacher = await this.classesModel.findByIdAndUpdate(
                data.classId,
                { $addToSet: { teachers: data.teacherId } },
                { new: true }
              ).exec();

            return 'Assigned teacher successfully';

        } catch(err){
            console.log("error in assigning the teacher",err)
            throw err
        }
    }
}
