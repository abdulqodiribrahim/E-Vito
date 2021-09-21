import { KategoriPengeluranDialogComponent } from './kategori-pengeluran-dialog/kategori-pengeluran-dialog.component';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFirestore } from '@angular/fire/firestore';
import { KategoriPengeluaranData } from '../../../@core/data/master-data-modul/kategori-pengeluaran';
import { DataTableService } from "../../tables/data-table.service";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-kategori-pengeluaran',
  templateUrl: './kategori-pengeluaran.component.html',
  styleUrls: ['./kategori-pengeluaran.component.scss']
})
export class KategoriPengeluaranComponent {
  settings = {
    actions: {
      add: false,
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
      kategori_1: {
        title: 'Kategori_1',
        type: 'string',
      },
      kategori_2: {
        title: 'Kategori_2',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: KategoriPengeluaranData, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tm_kategori", event.newData);

    this.dialogService.open(KategoriPengeluranDialogComponent)
      .onClose.subscribe(name => this.source.refresh);
    // .onClose.subscribe(name => name && this.names.push(name));
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

  onShowAll(): void {
    const data = this.service.getData();
    this.source.load(data);
  }

}
