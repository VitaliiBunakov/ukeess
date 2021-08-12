import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import {  Repository } from "typeorm";
import { InputFileModelEntity } from "../InputFileModel/InputFileModel.entity";

@Injectable()
export class FilesService {
  constructor(
    // @InjectRepository(InputFileModelEntity)
    // private inputFileModelEntityRepository: Repository<InputFileModelEntity>,
  ) {}




}
