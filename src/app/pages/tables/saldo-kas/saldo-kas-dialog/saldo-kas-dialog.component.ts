import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-saldo-kas-dialog',
  templateUrl: './saldo-kas-dialog.component.html',
  styleUrls: ['./saldo-kas-dialog.component.scss']
})
export class SaldoKasDialogComponent implements OnInit {

  constructor(protected ref: NbDialogRef<SaldoKasDialogComponent>, private dataTable: DataTableService, private datePipe: DatePipe) {

  }

  //for Option
  optionsJenis: string[];
  filteredNgModelOptionsJenis$: Observable<string[]>;
  valueJenis: string;

  ngOnInit() {
    this.optionsJenis = ['Saldo Masuk', 'Saldo Keluar'];
    this.filteredNgModelOptionsJenis$ = of(this.optionsJenis);
  }

  private filterJenis(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsJenis.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  onModelChangeJenis(value: string) {
    this.filteredNgModelOptionsJenis$ = of(this.filterJenis(value));
  }

  cancel() {
    this.ref.close();
  }

  myDate = new Date();
  submit(no_trans, tgl_trans, jenis, jumlah, ket) {
    let latest_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    if (jenis == "Saldo Masuk") {
      this.dataTable.createData("tt_kas", {
        no_trans: no_trans,
        tgl_trans: tgl_trans,
        jenis: jenis,
        jumlah: jumlah,
        ket: ket,
        jumlah_masuk: jumlah,
        jumlah_keluar: 0,
        user_entry: "administrator",
        tgl_entry: latest_date,
      });
    }else if (jenis == "Saldo Keluar") {
      this.dataTable.createData("tt_kas", {
        no_trans: no_trans,
        tgl_trans: tgl_trans,
        jenis: jenis,
        jumlah: jumlah,
        ket: ket,
        jumlah_masuk: 0,
        jumlah_keluar: jumlah,
        user_entry: "administrator",
        tgl_entry: latest_date,
      });
    }

    this.ref.close();
  }
}
