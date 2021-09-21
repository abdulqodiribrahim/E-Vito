import { CuttingDialogComponent } from './cutting-dialog/cutting-dialog.component';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFirestore } from '@angular/fire/firestore';
import { CuttingData } from '../../../@core/data/jproduction-modul/cutting';
import { CuttingData2 } from '../../../@core/data/jproduction-modul/cutting2';
import { DataTableService } from "../../tables/data-table.service";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-cutting',
  templateUrl: './cutting.component.html',
  styleUrls: ['./cutting.component.scss']
})

export class CuttingComponent {
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
      kode_gud: {
        title: 'Kode_Gudang',
        type: 'string',
      },
      kode_pegawai: {
        title: 'Kode_Karyawan',
        type: 'string',
      },
      nama_pegawai: {
        title: 'Nama_Karyawan',
        type: 'string',
      },
      ket: {
        title: 'Keterangan',
        type: 'string',
      },
      total: {
        title: 'Total',
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
      kode_brg: {
        title: 'Kode_Barang',
        type: 'string',
      },
      nama_brg: {
        title: 'Nama_Barang',
        type: 'string',
      },
      stock: {
        title: 'Stock',
        type: 'string',
      },
      stock_awal: {
        title: 'Stock_Awal',
        type: 'string',
      },
      qty: {
        title: 'Qty',
        type: 'string',
      },
      stock_akhir: {
        title: 'Stock_Akhir',
        type: 'string',
      },
      harga: {
        title: 'Harga',
        type: 'string',
      },
      total_harga: {
        title: 'Total',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  source2: LocalDataSource = new LocalDataSource();

  constructor(private service: CuttingData, private service2: CuttingData2, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);

    const data2 = this.service2.getData();
    this.source2.load(data2);

    // this.source.refresh();
    // this.router.onSameUrlNavigation = 'reload';
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tt_bukti_cut", event.newData);

    this.dialogService.open(CuttingDialogComponent)
      .onClose.subscribe(name => console.log("success"));
    // .onClose.subscribe(name => name && this.names.push(name));
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tt_bukti_cut", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_bukti_cut", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm2(event): void {
    this.dataTable.updateData("tt_detail_cut", event.newData);
  }

  onDeleteConfirm2(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_detail_cut", event.data);

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
