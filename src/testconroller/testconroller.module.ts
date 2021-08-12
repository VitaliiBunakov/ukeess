
import { Module } from '@nestjs/common';
import { TestconrollerController } from "./testconroller.controller";
import { Car } from "../cars/car.entity";

@Module({
  imports: [],
  providers:[],
  controllers: [TestconrollerController],
  exports: []
})
export class TestconrollerModule {
}
