import { SupplierDialogComponent } from './supplier-dialog/supplier-dialog.component';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFirestore } from '@angular/fire/firestore';
import { SupplierData } from '../../../@core/data/master-data-modul/supplier';
import { DataTableService } from "../../tables/data-table.service";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent {
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
      kode_sup: {
        title: 'Kode_Supplier',
        type: 'string',
      },
      nama_sup: {
        title: 'Nama_Supplier',
        type: 'string',
      },
      kontak_person: {
        title: 'Kontak_Person',
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
      fax: {
        title: 'Faximile',
        type: 'string',
      },
      npwp: {
        title: 'NPWP',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SupplierData, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tm_supplier", event.newData);

    this.dialogService.open(SupplierDialogComponent)
      .onClose.subscribe(name => console.log("success"));
    // .onClose.subscribe(name => name && this.names.push(name));
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tm_supplier", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tm_supplier", event.data);

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
