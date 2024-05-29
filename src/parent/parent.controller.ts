import { Controller,Get,Param,Post,Body } from '@nestjs/common';
import { ParentService } from './parent.service';

@Controller('parent')
export class ParentController {
    constructor( private readonly parentService : ParentService ){}

    @Get(':id/teachers')
    async getTeachersForChildren(@Param('id') id: string) {
      return this.parentService.getTeacherList(id);
    }

}
