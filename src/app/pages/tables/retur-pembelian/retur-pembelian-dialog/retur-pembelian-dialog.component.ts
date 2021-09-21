import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalesData } from '../../../../@core/data/master-data-modul/sales';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-retur-pembelian-dialog',
  templateUrl: './retur-pembelian-dialog.component.html',
  styleUrls: ['./retur-pembelian-dialog.component.scss']
})
export class ReturPembelianDialogComponent implements OnInit {

  //for Option
  optionsKodeSupplier: string[];
  filteredNgModelOptionsKodeSupplier$: Observable<string[]>;
  valueKodeSupplier: string;

  ngOnInit() {
    this.optionsKodeSupplier = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodeSupplier$ = of(this.optionsKodeSupplier);

    this.optionsNoPembelian = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsNoPembelian$ = of(this.optionsNoPembelian);

    this.optionsKodeGudang = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodeGudang$ = of(this.optionsKodeGudang);
  }
  private filterKodeSupplier(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeSupplier.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeSupplier(value: string) {
    this.filteredNgModelOptionsKodeSupplier$ = of(this.filterKodeSupplier(value));
  }

  //for Option
  optionsNoPembelian: string[];
  filteredNgModelOptionsNoPembelian$: Observable<string[]>;
  valueNoPembelian: string;

  private filterNoPembelian(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsNoPembelian.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeNoPembelian(value: string) {
    this.filteredNgModelOptionsNoPembelian$ = of(this.filterNoPembelian(value));
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

  constructor(protected ref: NbDialogRef<ReturPembelianDialogComponent>, private service: SalesData, private dataTable: DataTableService, private datePipe: DatePipe) {
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
      kode_brg: {
        title: 'Kode_Barang',
        type: 'string',
      },
      nama_brg: {
        title: 'Nama_Barang',
        type: 'string',
      },
      qty_beli: {
        title: 'Beli',
        type: 'string',
      },
      qty_sdh: {
        title: 'Sdh',
        type: 'string',
      },
      qty_sisa: {
        title: 'Sisa',
        type: 'string',
      },
      qty_retur: {
        title: 'Retur',
        type: 'string',
      },
      satuan: {
        title: 'Satuan',
        type: 'string',
      },
      harga: {
        title: 'Harga',
        type: 'string',
      },
      disc: {
        title: 'Disc(%)',
        type: 'string',
      },
      jml_disc: {
        title: 'Jml_Disc(Rp)',
        type: 'string',
      },
      total_harga: {
        title: 'Total_Harga',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  onCreateConfirm(event, noTransaksi, noPembelian, tanggal, kodeGudang): void {
    // this.dataTable.createData("tm_sales", event.newData);
    this.add_tt_detail_pengeluaran(event, noTransaksi, noPembelian);
    this.add_tt_stock(event, noTransaksi, tanggal, kodeGudang);
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tt_detail_retur_beli", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_detail_retur_beli", event.data);

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

  submit(noTransaksi, tanggal, kodeSupplier, namaSupplier, noPembelian, kodeGudang, namaGudang, noDokument, subTotalRp, discountPercent, discountRp, biayaLain, hargaBersih, bayar, kembali) {
    this.add_tt_bukti_pengeluaran(noTransaksi, tanggal, kodeSupplier, namaSupplier, noPembelian, kodeGudang, namaGudang, noDokument, subTotalRp, discountPercent, discountRp, biayaLain, hargaBersih, bayar, kembali);
    this.ref.close();
  }

  myDate = new Date();
  add_tt_bukti_pengeluaran(noTransaksi, tanggal, kodeSupplier, namaSupplier, noPembelian, kodeGudang, namaGudang, noDokument, subTotalRp, discountPercent, discountRp, biayaLain, hargaBersih, bayar, kembali) {
    let latest_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.dataTable.createData("tt_bukti_retur_beli", {
      no_trans: noTransaksi.value,
      tgl_trans: tanggal.value,
      kode_gud: kodeGudang.value,
      kode_sup: kodeSupplier.value,
      nama_sup: namaSupplier.value,
      fb: this.checked,
      no_beli: noPembelian.value,
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

  add_tt_detail_pengeluaran(event, noTransaksi, noPembelian) {
    this.dataTable.createData("tt_detail_retur_beli", {
      no_trans: noTransaksi.value,
      no_beli: noPembelian.value,
      kode_brg: event.newData.kode_brg,
      nama_brg: event.newData.nama_brg,
      qty_beli: event.newData.qty_beli,
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

  add_tt_stock(event, noTransaksi, tanggal, kodeGudang){
    this.dataTable.createData("tt_stock", {
      asal: "retur beli",
      tgl_trans: tanggal.value,
      no_trans: noTransaksi.value,
      kode_gud: kodeGudang.value,
      kode_brg: event.newData.kode_brg,
      qty_in: event.newData.qty_beli,
      qty_out: 0,
    });
  }

}
