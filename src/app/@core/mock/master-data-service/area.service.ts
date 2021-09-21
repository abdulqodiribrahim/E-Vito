import { Injectable } from '@angular/core';
import { AreaData } from '../../data/master-data-modul/area';
import { DataTableService } from "../../../pages/tables/data-table.service";

@Injectable({
  providedIn: 'root'
})
export class AreaService extends AreaData {
  addData = [{}];
  myArray: any[] = [];

  constructor(private dataTableService: DataTableService) {
    super();
  }

  getData() {
    this.dataTableService.getRealTimeData("tm_area").subscribe((ss) => {
      this.myArray = [];
      ss.docs.forEach((doc) => {
        this.myArray.push(doc.data());
      });
    });

    // let i = 0;

    // this.dataTableService.getDataList("tm_area").subscribe(res => {
    //   this.addData = [{}];
    //   res.map(e => {
    //     this.addData[i] = e.payload.doc.data();
    //     i++;
    //   });
    //   // res.forEach(test => {
    //   //   this.addData[i] = test.payload.doc.data();
    //   //   i++;
    //   // });
    // });

    // console.log(
    //   this.addData
    // )

    return this.myArray;
  }

}
