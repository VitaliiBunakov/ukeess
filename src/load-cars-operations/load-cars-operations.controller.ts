import { Controller, Get, Post, Req, UploadedFile, UseInterceptors } from "@nestjs/common";
import { LoadCarsOperationsService } from "./load-cars-operations.service";
import { Request } from "express";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("load-cars-operations")
export class LoadCarsOperationsController {
  constructor(
    private readonly loadCarsOperationService: LoadCarsOperationsService
  ) {
  }

  @Get()
  findAll(): string {
    return "This action returns all cats";
  }

  @Post()
  @UseInterceptors(FileInterceptor("file"))
  loadCars(@UploadedFile() file: Express.Multer.File): any {
    return this.loadCarsOperationService.loadCars(file);
  }
}
