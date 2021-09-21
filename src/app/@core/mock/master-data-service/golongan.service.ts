import { Injectable } from '@angular/core';
import { GolonganData } from '../../data/master-data-modul/golongan';
import { DataTableService } from "../../../pages/tables/data-table.service";

@Injectable({
  providedIn: 'root'
})
export class GolonganService extends GolonganData {
  addData = [{}];

  constructor(private dataTableService: DataTableService) {
    super();
  }

  getData() {
    let i = 0;
    this.dataTableService.getDataList("tm_golongan").subscribe(res => {
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
