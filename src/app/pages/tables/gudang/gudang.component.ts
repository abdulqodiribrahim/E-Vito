import { GudangDialogComponent } from './gudang-dialog/gudang-dialog.component';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFirestore } from '@angular/fire/firestore';
import { GudangData } from '../../../@core/data/master-data-modul/gudang';
import { DataTableService } from "../../tables/data-table.service";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-gudang',
  templateUrl: './gudang.component.html',
  styleUrls: ['./gudang.component.scss']
})
export class GudangComponent {
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
      kode_gud: {
        title: 'Kode_Gudang',
        type: 'string',
      },
      nama_gud: {
        title: 'Nama_Gudang',
        type: 'string',
      },
      kontak: {
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
      kd_pos: {
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
      ket: {
        title: 'Keterangan',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: GudangData, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tm_gudang", event.newData);

    this.dialogService.open(GudangDialogComponent)
      .onClose.subscribe(name => console.log("success"));
    // .onClose.subscribe(name => name && this.names.push(name));
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tm_gudang", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tm_gudang", event.data);

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
