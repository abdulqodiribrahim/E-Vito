import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-pembayaran-fee-dialog',
  templateUrl: './pembayaran-fee-dialog.component.html',
  styleUrls: ['./pembayaran-fee-dialog.component.scss']
})
export class PembayaranFeeDialogComponent implements OnInit {

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

  constructor(protected ref: NbDialogRef<PembayaranFeeDialogComponent>, private dataTable: DataTableService) {

  }

  cancel() {
    this.ref.close();
  }

  submit(tanggal, noTransaksi, kodeCustomer, namaCustomer, dariTanggal, sampaiDengan, grandTotal, feePercent, feeRp, penerima, keterangan) {
    this.add_tt_terima_fee_bukti(tanggal, noTransaksi, kodeCustomer, namaCustomer, dariTanggal, sampaiDengan, grandTotal, feePercent, feeRp, penerima, keterangan);
    this.add_tt_terima_fee_detail(tanggal, noTransaksi, kodeCustomer, namaCustomer);

    this.ref.close();
  }

  myDate = new Date();
  add_tt_terima_fee_bukti(tanggal, noTransaksi, kodeCustomer, namaCustomer, dariTanggal, sampaiDengan, grandTotal, feePercent, feeRp, penerima, keterangan) {
    this.dataTable.createData("tt_terima_fee_bukti", {
      tgl_trans: tanggal,
      no_trans: noTransaksi,
      kode_cust: kodeCustomer,
      nama_cust: namaCustomer,
      dari: dariTanggal,
      sampai: sampaiDengan,
      total: grandTotal,
      fee_percent: feePercent,
      fee_rp: feeRp,
      terima: penerima,
      ket: keterangan,
    });
  }

  add_tt_terima_fee_detail(tanggal, noTransaksi, kodeCustomer, namaCustomer) {
    this.dataTable.createData("tt_terima_fee_bukti", {
      tgl_trans: tanggal,
      no_trans: noTransaksi,
      tgl_jual: kodeCustomer,
      no_jual: namaCustomer,
    });
  }
}

