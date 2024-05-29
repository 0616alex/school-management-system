import { Injectable } from '@nestjs/common';
import { Parent } from './parent.schema'; 
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Classes } from '../classes/classes.schema';

@Injectable()
export class ParentService {
    constructor( @InjectModel (Parent.name) private parentModel:Model<Parent>) {
    }

    async getTeacherList(parentId:string) {
        try {
            const result = await this.parentModel.aggregate([
                { $match: { _id: parentId } },
                { $unwind: '$children' },
                {
                  $lookup: {
                    from: 'students',
                    localField: 'children',
                    foreignField: '_id',
                    as: 'childrenDetails'
                  }
                },
                { $unwind: '$childrenDetails' },
                { $unwind: '$childrenDetails.classes' },
                {
                  $lookup: {
                    from: 'classes',
                    localField: 'childrenDetails.classes',
                    foreignField: '_id',
                    as: 'classDetails'
                  }
                },
                { $unwind: '$classDetails' },
                {
                  $lookup: {
                    from: 'teachers',
                    localField: 'classDetails.teacher',
                    foreignField: '_id',
                    as: 'teacherDetails'
                  }
                },
                { $unwind: '$teacherDetails' },
                {
                  $group: {
                    _id: '$teacherDetails._id',
                    name: { $first: '$teacherDetails.name' },
                  }
                },
                {
                  $project: {
                    _id: 0,
                    id: '$_id',
                    name: 1
                  }
                }
              ]).exec();

              return result
            
        } catch(err) {
            console.log("error in getting the teacher list");
            throw err
        }
    }

}
