import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalesData } from '../../../../@core/data/master-data-modul/sales';
import { TmCustomer } from '../../../../@core/data/model/master/tm-customer.model';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-bayar-hutang-customer-dialog',
  templateUrl: './bayar-hutang-customer-dialog.component.html',
  styleUrls: ['./bayar-hutang-customer-dialog.component.scss']
})
export class BayarHutangCustomerDialogComponent implements OnInit {


  //for Option
  optionsKodeCustomer: string[];
  filteredNgModelOptionsKodeCustomer$: Observable<string[]>;
  valueKodeCustomer: string;

  tmCustomer: TmCustomer[];
  namaCust = new FormControl('');
  alamatCust = new FormControl('');

  ngOnInit() {
    this.dataTable.getDataList('tm_customer').subscribe(res => {
      this.tmCustomer = res.map( e => {
        const id =  e.payload.doc.id;
        const data = e.payload.doc.data() as TmCustomer;

        return {id, ...data} as TmCustomer;
      })
    });

    this.optionsKodeCustomer = ['Option 1'];
    this.filteredNgModelOptionsKodeCustomer$ = of(this.optionsKodeCustomer);
  }
  private filterKodeCustomer(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeCustomer.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeCustomer(value: string) {
    this.filteredNgModelOptionsKodeCustomer$ = of(this.filterKodeCustomer(value));

    this.tmCustomer.forEach(e => {
      if (value == e.kode_cust) {
        this.namaCust.setValue(e.nama_cust);
        this.alamatCust.setValue(e.alamat);
      }
    })
  }

  onClickCustomer() {
    let i = 0;
    this.tmCustomer.forEach(e => {
      this.optionsKodeCustomer[i] = e.kode_cust;
      i++;
    })
  }

  constructor(protected ref: NbDialogRef<BayarHutangCustomerDialogComponent>, private service: SalesData, private dataTable: DataTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  //for table
  settings = {
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
      Kode_Barang: {
        title: 'No.Jual',
        type: 'string',
      },
      Nama_Barang: {
        title: 'No.Dokumen',
        type: 'string',
      },
      Qty: {
        title: 'Tgl',
        type: 'string',
      },
      Satuan: {
        title: 'Total_Jual',
        type: 'string',
      },
      Harga: {
        title: 'Total_Bayar',
        type: 'string',
      },
      Disc: {
        title: 'Total_Hutang',
        type: 'string',
      },
      Jml_Disc: {
        title: 'Bayar',
        type: 'string',
      },
      Total_Harga: {
        title: 'Sisa_Hutang',
        type: 'string',
      },
      Keterangan: {
        title: 'Keterangan',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  onCreateConfirm(event): void {
    // this.dataTable.createData("tm_sales", event.newData);
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tm_sales", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tm_sales", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  cancel() {
    this.ref.close();
  }

  submit(tanggalTransaksi, noTransaksi, noDokument,
    kodeCustomer, namaCustomer, alamatCustomer, estimasiBayar,
    totalHutang, totalBayar, sisaHutang,
    cashRp, transferRp, cekRp,
    totalBayar2, kembali) {
    this.ref.close(name);
  }

}
