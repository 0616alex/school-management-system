import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { clasesSchema } from './classes.schema';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';

@Module({
    imports:[MongooseModule.forFeature([{name:'Classes',schema:clasesSchema}])],
    exports:[ClassesModule],
    providers: [ClassesService],
    controllers: [ClassesController]

})
export class ClassesModule {}
