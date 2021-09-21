import { CustomerDialogComponent } from './customer-dialog/customer-dialog.component';
import { filter } from 'rxjs/operators';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFirestore } from '@angular/fire/firestore';
import { CustomerData } from '../../../@core/data/master-data-modul/customer';
import { DataTableService } from "../../tables/data-table.service";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
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
      kode_cust: {
        title: 'Kode_Customer',
        type: 'string',
      },
      nama_cust: {
        title: 'Nama_Customer',
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
      tipe: {
        title: 'Tipe',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: CustomerData, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tm_customer", event.newData);

    this.dialogService.open(CustomerDialogComponent)
      .onClose.subscribe(name => console.log("success"));
    // .onClose.subscribe(name => name && this.names.push(name));
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tm_customer", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tm_customer", event.data);

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
