import { PegawaiDialogComponent } from './pegawai-dialog/pegawai-dialog.component';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFirestore } from '@angular/fire/firestore';
import { PegawaiData } from '../../../@core/data/master-data-modul/pegawai';
import { DataTableService } from "../../tables/data-table.service";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-pegawai',
  templateUrl: './pegawai.component.html',
  styleUrls: ['./pegawai.component.scss']
})
export class PegawaiComponent {
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
      kode: {
        title: 'Kode_Pegawai',
        type: 'string',
      },
      nama: {
        title: 'Nama_Pegawai',
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
      jabatan: {
        title: 'Jabatan',
        type: 'string',
      },
      jenis: {
        title: 'Jenis',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: PegawaiData, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tm_pegawai", event.newData);

    this.dialogService.open(PegawaiDialogComponent)
      .onClose.subscribe(name => console.log("success"));
    // .onClose.subscribe(name => name && this.names.push(name));
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tm_pegawai", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tm_pegawai", event.data);

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
