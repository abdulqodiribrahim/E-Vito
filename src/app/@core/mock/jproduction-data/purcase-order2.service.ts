import { Injectable } from '@angular/core';
import { DataTableService } from '../../../pages/tables/data-table.service';
import { PurcaseOrderData2 } from '../../data/jproduction-modul/purcase-order2';

@Injectable({
  providedIn: 'root'
})
export class PurcaseOrder2Service extends PurcaseOrderData2 {
  addData = [{}];

  constructor(private dataTableService: DataTableService) {
    super();
  }

  getData() {
    let i = 0;

    this.dataTableService.getDataList("tt_detail_order").subscribe(res => {

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
