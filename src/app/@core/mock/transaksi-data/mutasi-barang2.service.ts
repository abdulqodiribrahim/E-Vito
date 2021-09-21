import { Injectable } from '@angular/core';
import { MutasiBarangData2 } from '../../data/transaksi-data-modul/mutasi-barang2';
import { DataTableService } from "../../../pages/tables/data-table.service";

@Injectable({
  providedIn: 'root'
})
export class MutasiBarang2Service extends MutasiBarangData2 {
  addData = [{}];

  constructor(private dataTableService: DataTableService) {
    super();
  }

  getData() {
    let i = 0;

    this.dataTableService.getDataList("tt_detail_mutasi").subscribe(res => {

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
