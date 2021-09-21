import { ReturPembelianDialogComponent } from './retur-pembelian-dialog/retur-pembelian-dialog.component';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReturPembelianData } from '../../../@core/data/transaksi-data-modul/retur-pembelian';
import { DataTableService } from "../../tables/data-table.service";
import { ReturPembelianData2 } from '../../../@core/data/transaksi-data-modul/retur-pembelian2';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-retur-pembelian',
  templateUrl: './retur-pembelian.component.html',
  styleUrls: ['./retur-pembelian.component.scss']
})
export class ReturPembelianComponent {
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
      kode_sup: {
        title: 'Kode_Supplier',
        type: 'string',
      },
      nama_sup: {
        title: 'Nama_Supplier',
        type: 'string',
      },
      no_beli: {
        title: 'No.Pembelian',
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
      qty_beli: {
        title: 'Qty_Beli',
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

  constructor(private service: ReturPembelianData, private service2: ReturPembelianData2, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);

    const data2 = this.service2.getData();
    this.source2.load(data2);

    // this.source.refresh();
    // this.router.onSameUrlNavigation = 'reload';
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tt_bukti_retur_beli", event.newData);

    this.dialogService.open(ReturPembelianDialogComponent)
      .onClose.subscribe(name => console.log("success"));
    // .onClose.subscribe(name => name && this.names.push(name));
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tt_bukti_retur_beli", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_bukti_retur_beli", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm2(event): void {
    this.dataTable.updateData("tt_detail_retur_beli", event.newData);
  }

  onDeleteConfirm2(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_detail_retur_beli", event.data);

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
