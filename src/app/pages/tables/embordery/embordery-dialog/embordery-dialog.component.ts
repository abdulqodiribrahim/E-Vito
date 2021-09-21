import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalesData } from '../../../../@core/data/master-data-modul/sales';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-embordery-dialog',
  templateUrl: './embordery-dialog.component.html',
  styleUrls: ['./embordery-dialog.component.scss']
})
export class EmborderyDialogComponent implements OnInit {

  //for Option
  optionsKodeGudang: string[];
  filteredNgModelOptionsKodeGudang$: Observable<string[]>;
  valueKodeGudang: string;

  ngOnInit() {
    this.optionsKodeGudang = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodeGudang$ = of(this.optionsKodeGudang);

    this.optionsKodePegawai = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodePegawai$ = of(this.optionsKodePegawai);
  }
  private filterKodeGudang(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeGudang.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeGudang(value: string) {
    this.filteredNgModelOptionsKodeGudang$ = of(this.filterKodeGudang(value));
  }

  //for Option
  optionsKodePegawai: string[];
  filteredNgModelOptionsKodePegawai$: Observable<string[]>;
  valueKodePegawai: string;

  private filterKodePegawai(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodePegawai.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodePegawai(value: string) {
    this.filteredNgModelOptionsKodePegawai$ = of(this.filterKodePegawai(value));
  }

  constructor(protected ref: NbDialogRef<EmborderyDialogComponent>, private service: SalesData, private dataTable: DataTableService) {
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
      Stock_Awal: {
        title: 'Stock_Awal Cutting',
        type: 'string',
      },
      Stock: {
        title: 'Stock_Awal Bordir',
        type: 'string',
      },
      Stock_Akhir: {
        title: 'Stock_Akhir Cutting',
        type: 'string',
      },
      Stock_Akhir_Bordir: {
        title: 'Stock_Akhir Bordir',
        type: 'string',
      },
      Harga: {
        title: 'Harga',
        type: 'string',
      },
      Total_Harga: {
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

  submit(noTransaksi, tanggalTransaksi, kodeGudang, namaGudang,
    kodePegawai, namaPegawai, keterangan, jumlahTotal) {
    this.ref.close(noTransaksi);
  }

}
