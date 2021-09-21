import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { PurcaseOrderData } from '../../../@core/data/jproduction-modul/purcase-order';
import { PurcaseOrderData2 } from '../../../@core/data/jproduction-modul/purcase-order2';
import { DataTableService } from '../data-table.service';
import { PurcaseOrderDialogComponent } from './purcase-order-dialog/purcase-order-dialog.component';

@Component({
  selector: 'ngx-purcase-order',
  templateUrl: './purcase-order.component.html',
  styleUrls: ['./purcase-order.component.scss']
})
export class PurcaseOrderComponent {
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
      jenis_nota: {
        title: 'Jenis_Nota',
        type: 'string',
      },
      jt: {
        title: 'JT(Hari)',
        type: 'string',
      },
      tgl_jt: {
        title: 'Tgl_JT',
        type: 'string',
      },
      kode_sales: {
        title: 'Kode_Sales',
        type: 'string',
      },
      nama_sales: {
        title: 'Nama_Sales',
        type: 'string',
      },
      area: {
        title: 'Area',
        type: 'string',
      },
      kode_cust: {
        title: 'Kode_Kustomer',
        type: 'string',
      },
      nama_cust: {
        title: 'Nama_Customer',
        type: 'string',
      },
      alamat_cust: {
        title: 'Alamat',
        type: 'string',
      },
      subtotal: {
        title: 'Sub_Total',
        type: 'string',
      },
      disc: {
        title: 'Disc(%)',
        type: 'string',
      },
      jml_disc: {
        title: 'Jml_Disc(Rp)',
        type: 'string',
      },
      biaya: {
        title: 'Biaya_Lain',
        type: 'string',
      },
      harga_bersih: {
        title: 'Harga_Bersih',
        type: 'string',
      },
      cash: {
        title: 'Cash',
        type: 'string',
      },
      transfer: {
        title: 'Transfer',
        type: 'string',
      },
      cek: {
        title: 'Check',
        type: 'string',
      },
      total_bayar: {
        title: 'Total_Bayar',
        type: 'string',
      },
      kembali: {
        title: 'Kembali',
        type: 'string',
      },
      hutang: {
        title: 'Hutang',
        type: 'string',
      },
      no_cek: {
        title: 'No.Cek',
        type: 'string',
      },
      nama_bank: {
        title: 'Nama_Bank',
        type: 'string',
      },
      atas_nama: {
        title: 'Atas_Nama',
        type: 'string',
      },
      tgl_cek: {
        title: 'Tgl_Cek',
        type: 'string',
      },
      tgl_cair: {
        title: 'Tgl_Cair',
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

  constructor(private service: PurcaseOrderData, private service2: PurcaseOrderData2, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);

    const data2 = this.service2.getData();
    this.source2.load(data2);

    // this.source.refresh();
    // this.router.onSameUrlNavigation = 'reload';
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tt_bukti_jual", event.newData);

    this.dialogService.open(PurcaseOrderDialogComponent)
      .onClose.subscribe(name => console.log("success"));
    // .onClose.subscribe(name => name && this.names.push(name));
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tt_bukti_jual", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_bukti_jual", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm2(event): void {
    this.dataTable.updateData("tt_detail_jual", event.newData);
  }

  onDeleteConfirm2(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tt_detail_jual", event.data);

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
