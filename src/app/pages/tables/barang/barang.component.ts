import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFirestore } from '@angular/fire/firestore';
import { BarangData } from '../../../@core/data/master-data-modul/barang';
import { DataTableService } from "../../tables/data-table.service";
import { NbDialogService } from '@nebular/theme';
import { BarangDialogComponent } from './barang-dialog/barang-dialog.component';

@Component({
  selector: 'ngx-barang',
  templateUrl: './barang.component.html',
  styleUrls: ['./barang.component.scss']
})
export class BarangComponent{
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
      kode_brg: {
        title: 'Kode_Barang',
        type: 'string',
      },
      nama_brg: {
        title: 'Nama_Barang',
        type: 'string',
      },
      merk: {
        title: 'Merk',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      golongan: {
        title: 'Golongan',
        type: 'string',
      },
      satuan: {
        title: 'Satuan',
        type: 'string',
      },
      kode_sup: {
        title: 'Kode_Supplier',
        type: 'string',
      },
      harga_beli: {
        title: 'Harga_Beli',
        type: 'number',
      },
      hj_1: {
        title: 'Harga_Jual_1',
        type: 'number',
      },
      hj_2: {
        title: 'Harga_Jual_2',
        type: 'number',
      },
      hj_3: {
        title: 'Harga_Jual_3',
        type: 'number',
      },
      hj_4: {
        title: 'Harga_Jual_4',
        type: 'number',
      },
      stock_max: {
        title: 'Maximal_Stock',
        type: 'number',
      },
      stock_min: {
        title: 'Minimal_Stock',
        type: 'number',
      },
      ket: {
        title: 'Keterangan',
        type: 'text',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: BarangData, private dataTable: DataTableService, private angularFirestore: AngularFirestore, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tm_area", event.newData);

    this.dialogService.open(BarangDialogComponent)
      .onClose.subscribe(name => console.log("success"));
    // .onClose.subscribe(name => name && this.names.push(name));
  }

  updateData(data) {
    return this.angularFirestore
      .collection("tm_barang")
      .doc(data.key)
      .update(data);
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tm_barang", event.newData);
  }

  deleteData(data) {
    return this.angularFirestore
      .collection("tm_barang")
      .doc(data.key)
      .delete();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tm_barang", event.data);

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
