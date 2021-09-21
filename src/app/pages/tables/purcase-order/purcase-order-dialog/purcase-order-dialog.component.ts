import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalesData } from '../../../../@core/data/master-data-modul/sales';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-purcase-order-dialog',
  templateUrl: './purcase-order-dialog.component.html',
  styleUrls: ['./purcase-order-dialog.component.scss']
})
export class PurcaseOrderDialogComponent implements OnInit {

  //for Option
  optionsJenisNota: string[];
  filteredNgModelOptionsJenisNota$: Observable<string[]>;
  valueJenisNota: string;

  ngOnInit() {
    this.optionsJenisNota = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsJenisNota$ = of(this.optionsJenisNota);

    this.optionsKodeGudang = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodeGudang$ = of(this.optionsKodeGudang);

    this.optionsKodeSales = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodeSales$ = of(this.optionsKodeSales);

    this.optionsArea = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsArea$ = of(this.optionsArea);

    this.optionsKodeCustomer = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsKodeCustomer$ = of(this.optionsKodeCustomer);
  }
  private filterJenisNota(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsJenisNota.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeJenisNota(value: string) {
    this.filteredNgModelOptionsJenisNota$ = of(this.filterJenisNota(value));
  }

  //for Option
  optionsKodeGudang: string[];
  filteredNgModelOptionsKodeGudang$: Observable<string[]>;
  valueKodeGudang: string;

  private filterKodeGudang(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeGudang.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeGudang(value: string) {
    this.filteredNgModelOptionsKodeGudang$ = of(this.filterKodeGudang(value));
  }

  //for Option
  optionsKodeSales: string[];
  filteredNgModelOptionsKodeSales$: Observable<string[]>;
  valueKodeSales: string;

  private filterKodeSales(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeSales.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeSales(value: string) {
    this.filteredNgModelOptionsKodeSales$ = of(this.filterKodeSales(value));
  }

  //for Option
  optionsArea: string[];
  filteredNgModelOptionsArea$: Observable<string[]>;
  valueArea: string;

  private filterArea(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsArea.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeArea(value: string) {
    this.filteredNgModelOptionsArea$ = of(this.filterArea(value));
  }

  //for Option
  optionsKodeCustomer: string[];
  filteredNgModelOptionsKodeCustomer$: Observable<string[]>;
  valueKodeCustomer: string;

  private filterKodeCustomer(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsKodeCustomer.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeKodeCustomer(value: string) {
    this.filteredNgModelOptionsKodeCustomer$ = of(this.filterKodeCustomer(value));
  }

  constructor(protected ref: NbDialogRef<PurcaseOrderDialogComponent>, private service: SalesData, private dataTable: DataTableService) {
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
      Qty: {
        title: 'Qty',
        type: 'string',
      },
      Satuan: {
        title: 'Satuan',
        type: 'string',
      },
      Harga: {
        title: 'Harga',
        type: 'string',
      },
      Disc: {
        title: 'Disc(%)',
        type: 'string',
      },
      Jml_Disc: {
        title: 'Jml_Disc(RP)',
        type: 'string',
      },
      Netto: {
        title: 'Netto',
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

  imageUrl: string | ArrayBuffer = "https://bulma.io/images/placeholders/480x480.png";

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }



}
