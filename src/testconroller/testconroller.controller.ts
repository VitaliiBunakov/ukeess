import { Controller, Get, Param, Post, Req } from "@nestjs/common";
import { Request } from 'express';


@Controller('test')
export class TestconrollerController {

  @Post()
  getTested(@Req() request: Request)  {
    console.log(request.body);
  }
}
