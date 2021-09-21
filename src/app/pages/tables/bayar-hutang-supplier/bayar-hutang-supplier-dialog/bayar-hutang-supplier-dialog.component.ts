import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalesData } from '../../../../@core/data/master-data-modul/sales';
import { TmSupplier } from '../../../../@core/data/model/master/tm-supplier.model';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-bayar-hutang-supplier-dialog',
  templateUrl: './bayar-hutang-supplier-dialog.component.html',
  styleUrls: ['./bayar-hutang-supplier-dialog.component.scss']
})
export class BayarHutangSupplierDialogComponent implements OnInit {

  //for Option
  optionsKodeSupplier: string[];
  filteredNgModelOptionsKodeSupplier$: Observable<string[]>;
  valueKodeSupplier: string;

  tmSupplier: TmSupplier[];
  namaSup = new FormControl('');
  alamatSup = new FormControl('');

  ngOnInit() {
    this.dataTable.getDataList('tm_supplier').subscribe(res => {
      this.tmSupplier = res.map( e => {
        const id =  e.payload.doc.id;
        const data = e.payload.doc.data() as TmSupplier;

        return {id, ...data} as TmSupplier;
      })
    });

    this.optionsKodeSupplier = ['Option 1'];
    this.filteredNgModelOptionsKodeSupplier$ = of(this.optionsKodeSupplier);
  }
  private filterKodeSupplier(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeSupplier.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeSupplier(value: string) {
    this.filteredNgModelOptionsKodeSupplier$ = of(this.filterKodeSupplier(value));

    this.tmSupplier.forEach(e => {
      if (value == e.kode_sup) {
        this.namaSup.setValue(e.nama_sup);
        this.alamatSup.setValue(e.alamat);
      }
    })
  }

  onClickSupplier() {
    let i = 0;
    this.tmSupplier.forEach(e => {
      this.optionsKodeSupplier[i] = e.kode_sup;
      i++;
    })
  }

  myDate = new Date();
  constructor(protected ref: NbDialogRef<BayarHutangSupplierDialogComponent>, private service: SalesData, private dataTable: DataTableService, private datePipe: DatePipe) {
    const data = this.service.getData();
    this.source.load(data);
  }

  //for table
  //tt_bukti_beli
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
      no_trans: {
        title: 'No.Beli',
        type: 'string',
      },
      no_inv: {
        title: 'No.Inv',
        type: 'string',
      },
      tgl_trans: {
        title: 'Tgl',
        type: 'string',
      },
      total: {
        title: 'Total_Beli',
        type: 'string',
      },
      bayar: {
        title: 'Total_Bayar',
        type: 'string',
      },
      hutang: {
        title: 'Total_Hutang',
        type: 'string',
      },
      jml_disc: {
        title: 'Bayar',
        type: 'string',
      },
      sisa_hutang: {
        title: 'Sisa_Hutang',
        type: 'string',
      },
      ket: {
        title: 'Keterangan',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  onCreateConfirm(event): void {
    // this.dataTable.createData("tt_bukti_beli", event.newData);
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

  submit(tanggalTransaksi, noTransaksi, noDokument, kodeSupplier, namaSupplier, alamatSupplier,
    totalHutang, totalBayar, sisaHutang, cashRp, transferRp, cekRp, totalBayar2, kembali,
    noCek, namaBank, atasNama, tanggalCek, tanggalCair) {

      let latest_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

  }


}
