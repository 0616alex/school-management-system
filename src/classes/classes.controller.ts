import { Controller,Post,Body } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
    constructor( private readonly classesService : ClassesService ){}

    @Post(':id/teachers')
    addTeacherToClass(@Body() data) {
    return this.classesService.assignTeacherToClass(data);
}
}