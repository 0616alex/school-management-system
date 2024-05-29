import { Module } from '@nestjs/common';
import { ParentService } from './parent.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ParentSchema } from './parent.schema';
// import { Schema } from '@nestjs/mongoose';
import { ParentController } from './parent.controller';

@Module({
    imports:[MongooseModule.forFeature([{name:'Parent',schema:ParentSchema}])],
  providers: [ParentService],
  controllers: [ParentController]
})
export class ParentModule {}
