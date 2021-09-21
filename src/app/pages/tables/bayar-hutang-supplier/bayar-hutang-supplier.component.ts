import { BayarHutangSupplierDialogComponent } from './bayar-hutang-supplier-dialog/bayar-hutang-supplier-dialog.component';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFirestore } from '@angular/fire/firestore';
import { BayarHutangSupplierData } from '../../../@core/data/transaksi-data-modul/bayar-hutang-supplier';
import { DataTableService } from "../../tables/data-table.service";
import { BayarHutangSupplierData2 } from '../../../@core/data/transaksi-data-modul/bayar-hutang-supplier2';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-bayar-hutang-supplier',
  templateUrl: './bayar-hutang-supplier.component.html',
  styleUrls: ['./bayar-hutang-supplier.component.scss']
})
export class BayarHutangSupplierComponent {
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
        title: 'Tgl_Transaksi',
        type: 'string',
      },
      no_dok: {
        title: 'No.Dokumen',
        type: 'string',
      },
      kode_sup: {
        title: 'Kode_Supplier',
        type: 'string',
      },
      nama_sup: {
        title: 'Nama_Supplier',
        type: 'string',
      },
      alamat_sup: {
        title: 'Alamat',
        type: 'string',
      },
      total_hutang: {
        title: 'Total_Hutang',
        type: 'string',
      },
    },
  };

  settings2 = {
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
        title: 'No.Beli',
        type: 'string',
      },
      no_dok: {
        title: 'No.Dokumen',
        type: 'string',
      },
      tgl_beli: {
        title: 'Tgl_Beli',
        type: 'string',
      },
      total_beli: {
        title: 'Total_Beli',
        type: 'string',
      },
      total_bayar: {
        title: 'Total_Bayar',
        type: 'string',
      },
      total_hutang: {
        title: 'Total_Hutang',
        type: 'string',
      },
      bayar: {
        title: 'Bayar',
        type: 'string',
      },
      sisa_hutang: {
        title: 'Sisa_Hutang',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  source2: LocalDataSource = new LocalDataSource();

  constructor(private service: BayarHutangSupplierData, private service2: BayarHutangSupplierData2, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);

    const data2 = this.service2.getData();
    this.source2.load(data2);

    // this.source.refresh();
    // this.router.onSameUrlNavigation = 'reload';
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tt_bukti_bayar_supplier", event.newData);

    this.dialogService.open(BayarHutangSupplierDialogComponent)
      .onClose.subscribe(name => console.log("success"));
    // .onClose.subscribe(name => name && this.names.push(name));
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tt_bukti_bayar_supplier", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_bukti_bayar_supplier", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm2(event): void {
    this.dataTable.updateData("tt_detail_bayar_supplier", event.newData);
  }

  onDeleteConfirm2(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_detail_bayar_supplier", event.data);

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
