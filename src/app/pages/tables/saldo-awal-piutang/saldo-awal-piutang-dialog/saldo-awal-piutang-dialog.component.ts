import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-saldo-awal-piutang-dialog',
  templateUrl: './saldo-awal-piutang-dialog.component.html',
  styleUrls: ['./saldo-awal-piutang-dialog.component.scss']
})
export class SaldoAwalPiutangDialogComponent implements OnInit {

  //for Option
  optionsKodeCustomer: string[];
  filteredNgModelOptionsKodeCustomer$: Observable<string[]>;
  valueKodeCustomer: string;

  ngOnInit() {
    this.optionsKodeCustomer = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodeCustomer$ = of(this.optionsKodeCustomer);
  }
  private filterKodeCustomer(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeCustomer.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeCustomer(value: string) {
    this.filteredNgModelOptionsKodeCustomer$ = of(this.filterKodeCustomer(value));
  }

  myDate = new Date();

  constructor(protected ref: NbDialogRef<SaldoAwalPiutangDialogComponent>, private dataTable: DataTableService, private datePipe: DatePipe) { }

  cancel() {
    this.ref.close();
  }

  submit(tanggal, noTransaksi, kodeCustomer, namaCustomer,
    saldoAkhir, saldoAwal, disesuaikanPlus, disesuaikanMinus, keterangan) {

    this.add_tt_penyesuaian_piutang_bukti(tanggal, noTransaksi, kodeCustomer, namaCustomer,
      saldoAkhir, saldoAwal, disesuaikanPlus, disesuaikanMinus, keterangan);

    this.ref.close();
  }

  add_tt_penyesuaian_piutang_bukti(tanggal, noTransaksi, kodeCustomer, namaCustomer,
    saldoAkhir, saldoAwal, disesuaikanPlus, disesuaikanMinus, keterangan) {
    this.dataTable.createData("tt_penyesuaian_piutang_bukti", {
      no_trans: noTransaksi.value,
      tgl_trans: tanggal.value,
      no_dok: 0,
      kode_cust: kodeCustomer.value,
      nama_cust: namaCustomer.value,
      saldo_awal: saldoAwal.value,
      saldo_akhir: saldoAkhir.value,
      saldo_plus: disesuaikanPlus.value,
      saldo_min: disesuaikanMinus.value,
      ket: keterangan.value,
    });
  }

  add_tt_terima_fee_detail(tanggal, noTransaksi, kodeCustomer, namaCustomer,
    saldoAkhir, saldoAwal, disesuaikanPlus, disesuaikanMinus, keterangan) {
    this.dataTable.createData("tt_terima_fee_bukti", {
      no_trans: noTransaksi.value,
      tgl_trans: tanggal.value,
      kode_cust: kodeCustomer.value,
      nama_cust: namaCustomer.value,
      saldo_sebelum: saldoAwal.value,
      saldo_plus: disesuaikanPlus.value,
      saldo_min: disesuaikanMinus.value,
      saldo_akhir: saldoAkhir.value,
      ket: keterangan.value,
    });
  }

  notrans = "adsad";
}
