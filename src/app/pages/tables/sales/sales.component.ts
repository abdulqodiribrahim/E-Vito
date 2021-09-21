import { SalesDialogComponent } from './sales-dialog/sales-dialog.component';
import { SatuanDialogComponent } from './../satuan/satuan-dialog/satuan-dialog.component';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SalesData } from '../../../@core/data/master-data-modul/sales';
import { DataTableService } from "../../tables/data-table.service";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
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
      kode_sales: {
        title: 'Kode_Sales',
        type: 'string',
      },
      nama_sales: {
        title: 'Nama_Sales',
        type: 'string',
      },
      alamat: {
        title: 'Alamat',
        type: 'string',
      },
      kota: {
        title: 'Kota',
        type: 'string',
      },
      kode_pos: {
        title: 'Kode_Pos',
        type: 'number',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      telp: {
        title: 'Telphone',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SalesData, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tm_sales", event.newData);

    this.dialogService.open(SalesDialogComponent)
      .onClose.subscribe(name => console.log("success"));
    // .onClose.subscribe(name => name && this.names.push(name));
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

  onShowAll(): void {
    const data = this.service.getData();
    this.source.load(data);
  }
}
