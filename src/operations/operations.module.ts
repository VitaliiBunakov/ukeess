import { Module } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Car } from "../cars/car.entity";
import { Operation } from "./operation.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Operation])],
  providers: [OperationsService],
  exports: [OperationsService]
})
export class OperationsModule {}
