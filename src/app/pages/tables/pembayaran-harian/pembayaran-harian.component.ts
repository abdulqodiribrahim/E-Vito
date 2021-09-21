import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFirestore } from '@angular/fire/firestore';
import { PembayaranHarianData } from '../../../@core/data/jproduction-modul/pembayaran-harian';
import { DataTableService } from "../../tables/data-table.service";

@Component({
  selector: 'ngx-pembayaran-harian',
  templateUrl: './pembayaran-harian.component.html',
  styleUrls: ['./pembayaran-harian.component.scss']
})
export class PembayaranHarianComponent {
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
      no_trans: {
        title: 'No.Transaksi',
        type: 'string',
      },
      tgl_trans: {
        title: 'Tanggal',
        type: 'string',
      },
      dari: {
        title: 'Dari',
        type: 'string',
      },
      sampai: {
        title: 'S/D',
        type: 'string',
      },
      total_gaji: {
        title: 'Total_Gaji',
        type: 'string',
      },
      ket: {
        title: 'Keterangan',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: PembayaranHarianData, private dataTable: DataTableService, private angularFirestore: AngularFirestore) {
    const data = this.service.getData();
    this.source.load(data);

    // this.source.refresh();
    // this.router.onSameUrlNavigation = 'reload';
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tt_bukti_gaji", event.newData);
    console.log("dasd");
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tt_bukti_gaji", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_bukti_gaji", event.data);

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
