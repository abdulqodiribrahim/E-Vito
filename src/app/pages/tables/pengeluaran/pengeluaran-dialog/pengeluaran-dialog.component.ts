import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalesData } from '../../../../@core/data/master-data-modul/sales';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-pengeluaran-dialog',
  templateUrl: './pengeluaran-dialog.component.html',
  styleUrls: ['./pengeluaran-dialog.component.scss']
})
export class PengeluaranDialogComponent implements OnInit {

  //for Option
  optionsKategori1: string[];
  filteredNgModelOptionsKategori1$: Observable<string[]>;
  valueKategori1: string;

  ngOnInit() {
    this.optionsKategori1 = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKategori1$ = of(this.optionsKategori1);

    this.optionsKategori2 = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKategori2$ = of(this.optionsKategori2);
  }
  private filterKategori1(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKategori1.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKategori1(value: string) {
    this.filteredNgModelOptionsKategori1$ = of(this.filterKategori1(value));
  }

  //for Option
  optionsKategori2: string[];
  filteredNgModelOptionsKategori2$: Observable<string[]>;
  valueKategori2: string;

  private filterKategori2(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKategori2.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKategori2(value: string) {
    this.filteredNgModelOptionsKategori2$ = of(this.filterKategori2(value));
  }

  constructor(protected ref: NbDialogRef<PengeluaranDialogComponent>, private service: SalesData, private dataTable: DataTableService, private datePipe: DatePipe) {
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
      qty: {
        title: 'Qty',
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
      total_harga: {
        title: 'Total_Harga',
        type: 'string',
      },
      ket: {
        title: 'Keterangan',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  onCreateConfirm(event, noTransaksi): void {
    // this.dataTable.createData("tm_sales", event.newData);
    this.add_tt_detail_pengeluaran(event, noTransaksi);
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tt_detail_pengeluaran", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_detail_pengeluaran", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  cancel() {
    this.ref.close();
  }

  submit(noTransaksi, tanggalTransaksi, noDokument, kategori1, kategori2, totalHutang) {
    this.add_tt_bukti_pengeluaran(noTransaksi, tanggalTransaksi, noDokument, kategori1, kategori2, totalHutang);
    this.ref.close();
  }

  myDate = new Date();
  add_tt_bukti_pengeluaran(noTransaksi, tanggalTransaksi, noDokument, kategori1, kategori2, totalHutang) {
    let latest_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.dataTable.createData("tt_bukti_pengeluaran", {
      no_trans: noTransaksi.value,
      tgl_trans: tanggalTransaksi.value,
      no_dok: noDokument.value,
      kategori_1: kategori1.value,
      kategori_2: kategori2.value,
      total: totalHutang.value,
      komp: "administrator",
      user_entry: "administrator",
      tgl_entry: latest_date,
    });
  }

  add_tt_detail_pengeluaran(event, noTransaksi) {
    this.dataTable.createData("tt_detail_pengeluaran", {
      no_trans: noTransaksi.value,
      kode_brg: event.newData.kode_brg,
      nama_brg: event.newData.nama_brg,
      qty: event.newData.qty,
      satuan: event.newData.satuan,
      harga: event.newData.harga,
      total_harga: event.newData.total_harga,
      ket: event.newData.ket,
    });
  }
}
