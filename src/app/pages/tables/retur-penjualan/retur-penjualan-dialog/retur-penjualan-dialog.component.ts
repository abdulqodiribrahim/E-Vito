import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalesData } from '../../../../@core/data/master-data-modul/sales';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-retur-penjualan-dialog',
  templateUrl: './retur-penjualan-dialog.component.html',
  styleUrls: ['./retur-penjualan-dialog.component.scss']
})
export class ReturPenjualanDialogComponent implements OnInit {

  //for Option
  optionsKodeCustomer: string[];
  filteredNgModelOptionsKodeCustomer$: Observable<string[]>;
  valueKodeCustomer: string;

  ngOnInit() {
    this.optionsKodeCustomer = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodeCustomer$ = of(this.optionsKodeCustomer);

    this.optionsNoPenjualan = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsNoPenjualan$ = of(this.optionsNoPenjualan);

    this.optionsKodeGudang = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodeGudang$ = of(this.optionsKodeGudang);
  }
  private filterKodeCustomer(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeCustomer.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeCustomer(value: string) {
    this.filteredNgModelOptionsKodeCustomer$ = of(this.filterKodeCustomer(value));
  }

  //for Option
  optionsNoPenjualan: string[];
  filteredNgModelOptionsNoPenjualan$: Observable<string[]>;
  valueNoPenjualan: string;

  private filterNoPenjualan(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsNoPenjualan.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeNoPenjualan(value: string) {
    this.filteredNgModelOptionsNoPenjualan$ = of(this.filterNoPenjualan(value));
  }

  //for Option
  optionsKodeGudang: string[];
  filteredNgModelOptionsKodeGudang$: Observable<string[]>;
  valueKodeGudang: string;

  private filterKodeGudang(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeGudang.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeGudang(value: string) {
    this.filteredNgModelOptionsKodeGudang$ = of(this.filterKodeGudang(value));
  }

  constructor(protected ref: NbDialogRef<ReturPenjualanDialogComponent>, private service: SalesData, private dataTable: DataTableService, private datePipe: DatePipe) {
    const data = this.service.getData();
    this.source.load(data);
  }

  //for table
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
      mode: 'inline',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
      mode: 'inline',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Kode_Barang: {
        title: 'Kode_Barang',
        type: 'string',
      },
      Nama_Barang: {
        title: 'Nama_Barang',
        type: 'string',
      },
      Beli: {
        title: 'Beli',
        type: 'string',
      },
      Sdh: {
        title: 'Sdh',
        type: 'string',
      },
      Sisa: {
        title: 'Sisa',
        type: 'string',
      },
      Retur: {
        title: 'Retur',
        type: 'string',
      },
      Satuan: {
        title: 'Satuan',
        type: 'string',
      },
      Harga: {
        title: 'Harga',
        type: 'string',
      },
      Disc: {
        title: 'Disc(%)',
        type: 'string',
      },
      Jml_Disc: {
        title: 'Jml_Disc(Rp)',
        type: 'string',
      },
      Total_Harga: {
        title: 'Total_Harga',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  onCreateConfirm(event, noTransaksi, noPenjualan, tanggalTransaksi, kodeGudang): void {
    // this.dataTable.createData("tm_sales", event.newData);
    this.add_tt_detail_pengeluaran(event, noTransaksi, noPenjualan);
    this.add_tt_stock(event, noTransaksi, tanggalTransaksi, kodeGudang);
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tm_sales", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tm_sales", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  //for checkbox
  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

  cancel() {
    this.ref.close();
  }

  submit(noTransaksi, tanggalTransaksi, kodeCustomer, namaCustomer, noPenjualan, kodeGudang, namaGudang, noDokument, subTotalRp, discountPercent, discountRp, biayaLain, hargaBersih, bayar, kembali) {
    this.add_tt_bukti_retur_jual(noTransaksi, tanggalTransaksi, kodeCustomer, namaCustomer, noPenjualan, kodeGudang, namaGudang, noDokument, subTotalRp, discountPercent, discountRp, biayaLain, hargaBersih, bayar, kembali)
    this.ref.close(name);
  }

  myDate = new Date();
  add_tt_bukti_retur_jual(noTransaksi, tanggalTransaksi, kodeCustomer, namaCustomer, noPenjualan, kodeGudang, namaGudang, noDokument, subTotalRp, discountPercent, discountRp, biayaLain, hargaBersih, bayar, kembali){
    let latest_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.dataTable.createData("tt_bukti_retur_jual", {
      no_trans: noTransaksi.value,
      tgl_trans: tanggalTransaksi.value,
      kode_gud: kodeGudang.value,
      kode_cust: kodeCustomer.value,
      nama_cust: namaCustomer.value,
      fj: this.checked,
      no_jual: noPenjualan.value,
      no_dok: noDokument.value,
      subtotal: subTotalRp.value,
      disc: discountPercent.value,
      jml_disc: discountRp.value,
      biaya: biayaLain.value,
      harga_bersih: hargaBersih.value,
      bayar: bayar.value,
      kembali: kembali.value,
      komp: "administrator",
      user_entry: "administrator",
      tgl_entry: latest_date,
    });
  }

  add_tt_detail_pengeluaran(event, noTransaksi, noPenjualan) {
    this.dataTable.createData("tt_detail_retur_jual", {
      no_trans: noTransaksi.value,
      no_jual: noPenjualan.value,
      kode_brg: event.newData.kode_brg,
      nama_brg: event.newData.nama_brg,
      qty_jual: event.newData.qty_jual,
      qty_sdh: event.newData.qty_sdh,
      qty_sisa: event.newData.qty_sisa,
      qty_retur: event.newData.qty_retur,
      satuan: event.newData.satuan,
      harga: event.newData.harga,
      disc: event.newData.disc,
      jml_disc: event.newData.jml_disc,
      total_harga: event.newData.total_harga,
    });
  }

  add_tt_stock(event, noTransaksi, tanggalTransaksi, kodeGudang){
    this.dataTable.createData("tt_stock", {
      asal: "retur jual",
      tgl_trans: tanggalTransaksi.value,
      no_trans: noTransaksi.value,
      kode_gud: kodeGudang.value,
      kode_brg: event.newData.kode_brg,
      qty_in: 0,
      qty_out: event.newData.qty_out,
    });
  }

}
