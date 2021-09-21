import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { SalesData } from '../../../../@core/data/master-data-modul/sales';
import { TmGolongan } from '../../../../@core/data/model/master/tm-golongan.model';
import { TmSatuan } from '../../../../@core/data/model/master/tm-satuan.model';
import { TmSupplier } from '../../../../@core/data/model/master/tm-supplier.model';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-barang-dialog',
  templateUrl: './barang-dialog.component.html',
  styleUrls: ['./barang-dialog.component.scss']
})
export class BarangDialogComponent implements OnInit {

  constructor(protected ref: NbDialogRef<BarangDialogComponent>, private service: SalesData, private dataTable: DataTableService) { }

  //for Option
  optionsGolongan: string[];
  filteredNgModelOptionsGolongan$: Observable<string[]>;
  valueGolongan: string;

  optionsSatuan: string[];
  filteredNgModelOptionsSatuan$: Observable<string[]>;
  valueSatuan: string;

  optionsKodeSupplier: string[];
  filteredNgModelOptionsKodeSupplier$: Observable<string[]>;
  valueKodeSupplier: string;

  tmGolongan: TmGolongan[];
  tmSatuan: TmSatuan[];
  tmSupplier: TmSupplier[];
  namaSup = new FormControl('');

  ngOnInit() {
    this.dataTable.getDataList('tm_golongan').subscribe(res => {
      this.tmGolongan = res.map( e => {
        const id =  e.payload.doc.id;
        const data = e.payload.doc.data() as TmGolongan;

        return {id, ...data} as TmGolongan;
      })
    });

    this.dataTable.getDataList('tm_satuan').subscribe(res => {
      this.tmSatuan = res.map( e => {
        const id =  e.payload.doc.id;
        const data = e.payload.doc.data() as TmSatuan;

        return {id, ...data} as TmSatuan;
      })
    });

    this.dataTable.getDataList('tm_supplier').subscribe(res => {
      this.tmSupplier = res.map( e => {
        const id =  e.payload.doc.id;
        const data = e.payload.doc.data() as TmSupplier;

        return {id, ...data} as TmSupplier;
      })
    });

    this.optionsGolongan = ['Opti 1'];
    this.filteredNgModelOptionsGolongan$ = of(this.optionsGolongan);

    this.optionsSatuan = ['Op 1'];
    this.filteredNgModelOptionsSatuan$ = of(this.optionsSatuan);

    this.optionsKodeSupplier = ['ti 1'];
    this.filteredNgModelOptionsKodeSupplier$ = of(this.optionsKodeSupplier);
  }

  onClickGolongan() {
    let i = 0;
    this.tmGolongan.forEach(e => {
      this.optionsGolongan[i] = e.golongan;
      i++;
    })
  }
  onClickSatuan() {
    let i = 0;
    this.tmSatuan.forEach(e => {
      this.optionsSatuan[i] = e.satuan;
      i++;
    })
  }
  onClickSupplier() {
    let i = 0;
    this.tmSupplier.forEach(e => {
      this.optionsKodeSupplier[i] = e.kode_sup;
      i++;
    })
  }

  private filterGolongan(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsGolongan.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  private filterSatuan(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsSatuan.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  private filterKodeSupplier(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeSupplier.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  onModelChangeGolongan(value: string) {
    this.filteredNgModelOptionsGolongan$ = of(this.filterGolongan(value));
  }
  onModelChangeSatuan(value: string) {
    this.filteredNgModelOptionsSatuan$ = of(this.filterSatuan(value));
  }
  onModelChangeKodeSupplier(value: string) {
    this.filteredNgModelOptionsKodeSupplier$ = of(this.filterKodeSupplier(value));

    this.tmSupplier.forEach(e => {
      if (value == e.kode_sup) {
        this.namaSup.setValue(e.nama_sup);
      }
    })
  }

  //for check box
  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

  //for image
  selectedFile: File
  imageUrl: string | ArrayBuffer = "https://bulma.io/images/placeholders/480x480.png";
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);

    reader.onload = event => {
      this.imageUrl = reader.result;
    };
  }

  onUpload() {
    // upload code goes here
  }

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }


}
