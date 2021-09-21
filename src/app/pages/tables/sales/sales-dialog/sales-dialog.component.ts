import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GolonganData } from '../../../../@core/data/master-data-modul/golongan';
import { SalesData } from '../../../../@core/data/master-data-modul/sales';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-sales-dialog',
  templateUrl: './sales-dialog.component.html',
  styleUrls: ['./sales-dialog.component.scss']
})
export class SalesDialogComponent implements OnInit {

  //for Option
  optionsGolongan: string[];
  filteredNgModelOptionsGolongan$: Observable<string[]>;
  valueGolongan: string;

  ngOnInit() {
    this.optionsGolongan = ['Opti 1', 'Opti 2', 'Opti 3'];
    this.filteredNgModelOptionsGolongan$ = of(this.optionsGolongan);
  }

  private filterGolongan(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsGolongan.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  onModelChangeGolongan(value: string) {
    this.filteredNgModelOptionsGolongan$ = of(this.filterGolongan(value));
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
      Harga: {
        title: 'Harga',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected ref: NbDialogRef<SalesDialogComponent>, private service: SalesData, private dataTable: DataTableService,
    private serviceGolongan: GolonganData) {

    const data = this.service.getData();
    this.source.load(data);
  }

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

  //for checkbox
  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }

}
