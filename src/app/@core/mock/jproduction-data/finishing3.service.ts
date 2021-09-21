import { Injectable } from '@angular/core';
import { FinishingData3 } from '../../data/jproduction-modul/finishing3';
import { DataTableService } from "../../../pages/tables/data-table.service";

@Injectable({
  providedIn: 'root'
})
export class Finishing3Service extends FinishingData3{
  addData = [{}];

  constructor(private dataTableService: DataTableService) {
    super();
  }

  getData() {
    let i = 0;

    this.dataTableService.getDataList("tt_detail_finish_mix").subscribe(res => {
      this.addData = [{}];
      res.map(e => {
        this.addData[i] = e.payload.doc.data();
        i++;
      });
      // res.forEach(test => {
      //   this.addData[i] = test.payload.doc.data();
      //   i++;
      // });
    });

    console.log(
      this.addData
    )

    return this.addData;
  }
}
