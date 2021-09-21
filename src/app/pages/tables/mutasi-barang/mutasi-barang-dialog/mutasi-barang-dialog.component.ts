import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalesData } from '../../../../@core/data/master-data-modul/sales';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-mutasi-barang-dialog',
  templateUrl: './mutasi-barang-dialog.component.html',
  styleUrls: ['./mutasi-barang-dialog.component.scss']
})
export class MutasiBarangDialogComponent implements OnInit {

  //for Option
  optionsKodeSupplier: string[];
  filteredNgModelOptionsKodeSupplier$: Observable<string[]>;
  valueKodeSupplier: string;

  ngOnInit() {
    this.optionsKodeSupplier = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodeSupplier$ = of(this.optionsKodeSupplier);

    this.optionsDariGudang = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsDariGudang$ = of(this.optionsDariGudang);

    this.optionsKeGudang = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKeGudang$ = of(this.optionsKeGudang);
  }
  private filterKodeSupplier(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeSupplier.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeSupplier(value: string) {
    this.filteredNgModelOptionsKodeSupplier$ = of(this.filterKodeSupplier(value));
  }

  //for Option
  optionsDariGudang: string[];
  filteredNgModelOptionsDariGudang$: Observable<string[]>;
  valueDariGudang: string;

  private filterDariGudang(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsDariGudang.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeDariGudang(value: string) {
    this.filteredNgModelOptionsDariGudang$ = of(this.filterDariGudang(value));
  }

  //for Option
  optionsKeGudang: string[];
  filteredNgModelOptionsKeGudang$: Observable<string[]>;
  valueKeGudang: string;

  private filterKeGudang(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKeGudang.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKeGudang(value: string) {
    this.filteredNgModelOptionsKeGudang$ = of(this.filterKeGudang(value));
  }

  constructor(protected ref: NbDialogRef<MutasiBarangDialogComponent>, private service: SalesData, private dataTable: DataTableService) {
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
      Qty: {
        title: 'Qty',
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
        title: 'Total_Harga',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  onCreateConfirm(event): void {
    // this.dataTable.createData("tm_sales", event.newData);
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

  cancel() {
    this.ref.close();
  }

  submit(noTransaksi, tanggalTransaksi, kodeSupplier,
    dariGudang, namaDariGudang, keGudang, namaKeGudang, keterangan,
    totalHutang) {
    this.ref.close(noTransaksi);
  }

}
