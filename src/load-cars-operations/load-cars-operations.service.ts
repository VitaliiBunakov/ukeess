import { Injectable } from "@nestjs/common";
import { CarsService } from "../cars/cars.service";
import { OperationsService } from "../operations/operations.service";
import { Connection } from "typeorm";
import { parse } from "csv";

const fs = require("fs");
const path = require("path");

@Injectable()
export class LoadCarsOperationsService {


  constructor(
    private readonly carsService: CarsService,
    readonly operationsService: OperationsService
  ) {
  }


  // @ts-ignore
  loadCars(file): string {
    try {
      fs.writeFile(path.join(__dirname, "../..", "files_tmp", file.originalname),
        file.buffer.toString("utf8"),
        (err) => {
          // throws an error, you could also catch it here
          if (err) throw err;
        });

    } catch (err) {
      console.log(err);
    }
    try{
      fs.createReadStream(path.join(__dirname, "../..", "files_tmp", file.originalname))
        //pipe to csv parser
        .pipe(parse({ delimiter: ";", columns: true }))
        //on each csv line do ...
        .on("data", async (csvrow) => {

          let tmpObj = {};
          //if had empty field - return null instead of empty string
          for (const [key, val] of Object.entries(csvrow)) {
            if (csvrow[key] === "") {
              tmpObj[key.toLowerCase()] = null;
            } else {
              tmpObj[key.toLowerCase()] = csvrow[key];
            }
          }

          // @ts-ignore
          let vin = tmpObj.vin;

          // if vin isn't empty
          if (vin) {
            //check - is car with curr vin exists
            let check = await this.carsService.find(vin);

            if (!check.length) {
              // car doesn't exists - create new record  - car
              await this.carsService.createCar(tmpObj);


            } else {
              //car exists -  create new record - operation
              await this.operationsService.createOperation(tmpObj);

            }

          } else {
            //if csv row had no vin field  - just create new record - operation
            await this.operationsService.createOperation(tmpObj);
          }

        })
        .on("end", function() {

        });
    }catch (err){
      console.log(err);
    }
    return (`File in progress`);

  }
}
