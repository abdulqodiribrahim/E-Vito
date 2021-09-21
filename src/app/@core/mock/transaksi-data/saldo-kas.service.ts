import { Injectable } from '@angular/core';
import { SaldoKasData } from '../../data/transaksi-data-modul/saldo-kas';
import { DataTableService } from "../../../pages/tables/data-table.service";

@Injectable({
  providedIn: 'root'
})
export class SaldoKasService extends SaldoKasData{
  addData = [{}];

  constructor(private dataTableService: DataTableService) {
    super();
  }

  getData() {
    let i = 0;

    this.dataTableService.getDataList("tt_kas").subscribe(res => {

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
