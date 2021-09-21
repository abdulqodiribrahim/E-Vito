import { PembayaranFeeDialogComponent } from './pembayaran-fee-dialog/pembayaran-fee-dialog.component';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFirestore } from '@angular/fire/firestore';
import { PembayaranFeeData } from '../../../@core/data/transaksi-data-modul/pembayaran-fee';
import { DataTableService } from "../../tables/data-table.service";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-pembayaran-fee',
  templateUrl: './pembayaran-fee.component.html',
  styleUrls: ['./pembayaran-fee.component.scss']
})
export class PembayaranFeeComponent {
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
      kode_cust: {
        title: 'Kode_Customer',
        type: 'string',
      },
      nama_cust: {
        title: 'Nama_Customer',
        type: 'string',
      },
      dari: {
        title: 'Dari',
        type: 'string',
      },
      sampai: {
        title: 'Sampai',
        type: 'string',
      },
      total: {
        title: 'Grand_Total',
        type: 'string',
      },
      fee_rp: {
        title: 'Fee',
        type: 'string',
      },
      terima: {
        title: 'Penerimaan',
        type: 'string',
      },
      ket: {
        title: 'Keterangan',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: PembayaranFeeData, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);

    // this.source.refresh();
    // this.router.onSameUrlNavigation = 'reload';
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tt_terima_fee_bukti", event.newData);

    this.dialogService.open(PembayaranFeeDialogComponent)
      .onClose.subscribe(name => console.log("success"));
    // .onClose.subscribe(name => name && this.names.push(name));
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tt_terima_fee_bukti", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_terima_fee_bukti", event.data);

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
