import { FinishingDialogComponent } from './finishing-dialog/finishing-dialog.component';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFirestore } from '@angular/fire/firestore';
import { FinishingData } from '../../../@core/data/jproduction-modul/finishing';
import { FinishingData2 } from '../../../@core/data/jproduction-modul/finishing2';
import { FinishingData3 } from '../../../@core/data/jproduction-modul/finishing3';
import { DataTableService } from "../../tables/data-table.service";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-finishing',
  templateUrl: './finishing.component.html',
  styleUrls: ['./finishing.component.scss']
})
export class FinishingComponent {
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
      jahit_awal: {
        title: 'Stock_Awal_Jahit	',
        type: 'string',
      },
      finis_awal: {
        title: 'Stock_Awal_Finis',
        type: 'string',
      },
      qty: {
        title: 'Qty',
        type: 'string',
      },
      jahit_akhir: {
        title: 'Stock_Akhir_Jahit',
        type: 'string',
      },
      finis_akhir: {
        title: 'Stock_Akhir_Finis',
        type: 'string',
      },
      harga: {
        title: 'Harga',
        type: 'string',
      },
      total_harga: {
        title: 'Total_Harga',
        type: 'string',
      },
    },
  };

  settings3 = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
      mode: 'inline',
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
      kode_gud: {
        title: 'Kode_Gudang	',
        type: 'string',
      },
      qty: {
        title: 'Qty',
        type: 'string',
      },
      satuan: {
        title: 'Satuan',
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
  source3: LocalDataSource = new LocalDataSource();

  constructor(private service: FinishingData, private service2: FinishingData2, private service3: FinishingData3, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);

    const data2 = this.service2.getData();
    this.source2.load(data2);

    const data3 = this.service3.getData();
    this.source3.load(data3);

    // this.source.refresh();
    // this.router.onSameUrlNavigation = 'reload';
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tt_bukti_finis", event.newData);

    this.dialogService.open(FinishingDialogComponent)
    .onClose.subscribe(name => console.log("success"));
  // .onClose.subscribe(name => name && this.names.push(name));
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tt_bukti_finis", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_bukti_finis", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm2(event): void {
    this.dataTable.updateData("tt_detail_finish_mix", event.newData);
  }

  onDeleteConfirm2(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_detail_finish_mix", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm3(event): void {
    this.dataTable.updateData("tt_detail_finis", event.newData);
  }

  onDeleteConfirm3(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_detail_finis", event.data);

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
