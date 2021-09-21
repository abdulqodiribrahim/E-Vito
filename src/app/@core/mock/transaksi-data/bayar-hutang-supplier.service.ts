import { Injectable } from '@angular/core';
import { BayarHutangSupplierData } from '../../data/transaksi-data-modul/bayar-hutang-supplier';
import { DataTableService } from "../../../pages/tables/data-table.service";

@Injectable({
  providedIn: 'root'
})
export class BayarHutangSupplierService extends BayarHutangSupplierData {
  addData = [{}];

  constructor(private dataTableService: DataTableService) {
    super();
  }

  getData() {
    let i = 0;

    this.dataTableService.getDataList("tt_bukti_bayar_supplier").subscribe(res => {

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
