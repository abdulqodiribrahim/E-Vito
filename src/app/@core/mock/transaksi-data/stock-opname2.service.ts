import { Injectable } from '@angular/core';
import { StockOpnameData2 } from '../../data/transaksi-data-modul/stock-opname2';
import { DataTableService } from "../../../pages/tables/data-table.service";

@Injectable({
  providedIn: 'root'
})
export class StockOpname2Service extends StockOpnameData2  {
  addData = [{}];

  constructor(private dataTableService: DataTableService) {
    super();
  }

  getData() {
    let i = 0;

    this.dataTableService.getDataList("tt_detail_opname").subscribe(res => {

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
