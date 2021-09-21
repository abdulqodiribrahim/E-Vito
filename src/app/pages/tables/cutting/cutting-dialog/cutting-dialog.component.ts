import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalesData } from '../../../../@core/data/master-data-modul/sales';
import { TmGudang } from '../../../../@core/data/model/master/tm-gudang.model';
import { TmPegawai } from '../../../../@core/data/model/master/tm-pegawai.model';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-cutting-dialog',
  templateUrl: './cutting-dialog.component.html',
  styleUrls: ['./cutting-dialog.component.scss']
})
export class CuttingDialogComponent implements OnInit {

  //for Option
  optionsKodeGudang: string[];
  filteredNgModelOptionsKodeGudang$: Observable<string[]>;
  valueKodeGudang: string;

  tmGudang: TmGudang[];
  tmPegawai: TmPegawai[];
  namaGud = new FormControl('');
  namaPeg = new FormControl('');

  ngOnInit() {
    this.dataTable.getDataList('tm_gudang').subscribe(res => {
      this.tmGudang = res.map( e => {
        const id =  e.payload.doc.id;
        const data = e.payload.doc.data() as TmGudang;

        return {id, ...data} as TmGudang;
      })
    });
    this.dataTable.getDataList('tm_pegawai').subscribe(res => {
      this.tmPegawai = res.map( e => {
        const id =  e.payload.doc.id;
        const data = e.payload.doc.data() as TmPegawai;

        return {id, ...data} as TmPegawai;
      })
    });

    this.optionsKodeGudang = ['Option 1'];
    this.filteredNgModelOptionsKodeGudang$ = of(this.optionsKodeGudang);

    this.optionsKodePegawai = ['Option 1'];
    this.filteredNgModelOptionsKodePegawai$ = of(this.optionsKodePegawai);
  }
  private filterKodeGudang(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeGudang.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeGudang(value: string) {
    this.filteredNgModelOptionsKodeGudang$ = of(this.filterKodeGudang(value));

    this.tmGudang.forEach(e => {
      if (value == e.kode_gud) {
        this.namaGud.setValue(e.nama_gud);
      }
    })
  }
  onClickGudang() {
    let i = 0;
    this.tmGudang.forEach(e => {
      this.optionsKodeGudang[i] = e.kode_gud;
      i++;
    });
  }

  //for Option
  optionsKodePegawai: string[];
  filteredNgModelOptionsKodePegawai$: Observable<string[]>;
  valueKodePegawai: string;

  private filterKodePegawai(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodePegawai.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodePegawai(value: string) {
    this.filteredNgModelOptionsKodePegawai$ = of(this.filterKodePegawai(value));

    this.tmPegawai.forEach(e => {
      if (value == e.kode) {
        this.namaPeg.setValue(e.nama);
      }
    });
  }
  onClickPegawai() {
    let i = 0;
    this.tmPegawai.forEach(e => {
      this.optionsKodePegawai[i] = e.kode;
      i++;
    });
  }

  //for table
  constructor(protected ref: NbDialogRef<CuttingDialogComponent>, private service: SalesData, private dataTable: DataTableService) {
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
        title: 'Kode_Barang',
        type: 'string',
      },
      Nama_Barang: {
        title: 'Nama_Barang',
        type: 'string',
      },
      Stock: {
        title: 'Stock',
        type: 'string',
      },
      Stock_Awal: {
        title: 'Stock_Awal',
        type: 'string',
      },
      Qty: {
        title: 'Qty',
        type: 'string',
      },
      Stock_Akhir: {
        title: 'Stock_Akhir',
        type: 'string',
      },
      Harga: {
        title: 'Harga',
        type: 'string',
      },
      Total_Harga: {
        title: 'Total_Harga',
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

  submit(noTransaksi, tanggalTransaksi, kodeGudang, namaGudang,
    kodePegawai, namaPegawai, keterangan, jumlahTotal) {
    this.ref.close(noTransaksi);
  }

}
