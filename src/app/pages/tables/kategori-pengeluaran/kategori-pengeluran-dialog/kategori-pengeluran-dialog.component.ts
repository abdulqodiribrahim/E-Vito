import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { KategoriPengeluaranData } from '../../../../@core/data/master-data-modul/kategori-pengeluaran';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-kategori-pengeluran-dialog',
  templateUrl: './kategori-pengeluran-dialog.component.html',
  styleUrls: ['./kategori-pengeluran-dialog.component.scss']
})
export class KategoriPengeluranDialogComponent implements OnInit {

  //for Option
  optionsKategori1: string[];
  filteredNgModelOptionsKategori1$: Observable<string[]>;
  valueKategori1: string;

  ngOnInit() {
    this.optionsKategori1 = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKategori1$ = of(this.optionsKategori1);
  }
  private filterKategori1(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKategori1.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKategori1(value: string) {
    this.filteredNgModelOptionsKategori1$ = of(this.filterKategori1(value));
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
      kategori_2: {
        title: 'Kategori_2',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected ref: NbDialogRef<KategoriPengeluranDialogComponent>, private serviceKategori: KategoriPengeluaranData, private service: KategoriPengeluaranData, private dataTable: DataTableService, private dialogService: NbDialogService, private datePipe: DatePipe) {
    const data = this.service.getData();
    this.source.load(data);
  }

  myDate = new Date();
  onCreateConfirm(event, kategori1): void {
    let latest_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.dataTable.createData("tm_kategori", {
      kategori_1: kategori1,
      kategori_2: event.newData.kategori_2,
      komp: "administrator",
      user_entry: "administrator",
      tgl_entry: latest_date,
    });
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tm_kategori", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tm_kategori", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
}
