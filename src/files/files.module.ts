import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { InputFileModelEntity } from "../InputFileModel/InputFileModel.entity";

@Module({
  imports: [ InputFileModelEntity],
  providers: [FilesService],
  exports:[FilesService]
})
export class FilesModule {}
