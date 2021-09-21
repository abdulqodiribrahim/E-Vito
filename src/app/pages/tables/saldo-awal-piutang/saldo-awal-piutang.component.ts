import { SaldoAwalPiutangDialogComponent } from './saldo-awal-piutang-dialog/saldo-awal-piutang-dialog.component';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFirestore } from '@angular/fire/firestore';
import { SaldoAwalPiutangData } from '../../../@core/data/transaksi-data-modul/saldo-awal-piutang';
import { DataTableService } from "../../tables/data-table.service";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-saldo-awal-piutang',
  templateUrl: './saldo-awal-piutang.component.html',
  styleUrls: ['./saldo-awal-piutang.component.scss']
})
export class SaldoAwalPiutangComponent {
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
      saldo_awal: {
        title: 'Saldo_Awal',
        type: 'string',
      },
      saldo_akhir: {
        title: 'Saldo_Akhir',
        type: 'string',
      },
      saldo_plus: {
        title: 'Grand_Total',
        type: 'string',
      },
      ket: {
        title: 'Keterangan',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SaldoAwalPiutangData, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);

    // this.source.refresh();
    // this.router.onSameUrlNavigation = 'reload';
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tt_penyesuaian_piutang_bukti", event.newData);

    this.dialogService.open(SaldoAwalPiutangDialogComponent)
      .onClose.subscribe(name => console.log("success"));
    // .onClose.subscribe(name => name && this.names.push(name));
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tt_penyesuaian_piutang_bukti", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_penyesuaian_piutang_bukti", event.data);

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
