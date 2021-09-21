import { ReturPenjualanDialogComponent } from './retur-penjualan-dialog/retur-penjualan-dialog.component';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReturPenjualanData } from '../../../@core/data/transaksi-data-modul/retur-penjualan';
import { DataTableService } from "../../tables/data-table.service";
import { ReturPenjualanData2 } from '../../../@core/data/transaksi-data-modul/retur-penjualan2';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-retur-penjualan',
  templateUrl: './retur-penjualan.component.html',
  styleUrls: ['./retur-penjualan.component.scss']
})
export class ReturPenjualanComponent {
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
      kode_cust: {
        title: 'Kode_Customer',
        type: 'string',
      },
      nama_cust: {
        title: 'Nama_Customer',
        type: 'string',
      },
      no_jual: {
        title: 'No.Penjualan',
        type: 'string',
      },
      no_dok: {
        title: 'No.Dokumen',
        type: 'string',
      },
      subtotal: {
        title: 'Sub_Total',
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
      qty_jual: {
        title: 'Qty_Jual',
        type: 'string',
      },
      qty_sdh: {
        title: 'Qty_Sudah_Retur',
        type: 'string',
      },
      qty_sisa: {
        title: 'Qty_Sisa',
        type: 'string',
      },
      qty_retur: {
        title: 'Qty_Retur',
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
      disc: {
        title: 'Disc(%)',
        type: 'string',
      },
      jml_disc: {
        title: 'Jlm_Disc(Rp)',
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

  constructor(private service: ReturPenjualanData, private service2: ReturPenjualanData2, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);

    const data2 = this.service2.getData();
    this.source2.load(data2);

    // this.source.refresh();
    // this.router.onSameUrlNavigation = 'reload';
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tt_bukti_retur_jual", event.newData);

    this.dialogService.open(ReturPenjualanDialogComponent)
      .onClose.subscribe(name => console.log("success"));
    // .onClose.subscribe(name => name && this.names.push(name));
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tt_bukti_retur_jual", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_bukti_retur_jual", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm2(event): void {
    this.dataTable.updateData("tt_detail_retur_jual", event.newData);
  }

  onDeleteConfirm2(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_detail_retur_jual", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onShowAll(): void {
    const data = this.service.getData();
    this.source.load(data);
  }
  onShowAll2(): void {
    const data2 = this.service2.getData();
    this.source2.load(data2);
  }

}
