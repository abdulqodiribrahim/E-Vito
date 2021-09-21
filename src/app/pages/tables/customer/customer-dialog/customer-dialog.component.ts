import { DatePipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.scss']
})
export class CustomerDialogComponent implements OnInit {

  myDate = new Date();
  constructor(protected ref: NbDialogRef<CustomerDialogComponent>, private dataTable: DataTableService, private datePipe: DatePipe) { }

  //for Checkbox
  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

  //for Option
  optionsJenisPenggajian: string[];
  filteredNgModelOptionsJenisPenggajian$: Observable<string[]>;
  valueJenisPenggajian: string;

  ngOnInit() {
    this.optionsJenisPenggajian = ['Distributor', 'Grosir', 'Reseller', 'User'];
    this.filteredNgModelOptionsJenisPenggajian$ = of(this.optionsJenisPenggajian);
  }
  private filterJenisPenggajian(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsJenisPenggajian.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }
  onModelChangeJenisPenggajian(value: string) {
    this.filteredNgModelOptionsJenisPenggajian$ = of(this.filterJenisPenggajian(value));
  }

  cancel() {
    this.ref.close();
  }

  submit(kode_cust, nama_cust, kontak_person, alamat, kota, kode_pos, email, telp, fax, tipe) {
    let latest_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.dataTable.createData("tm_customer", {
      kode_cust: kode_cust,
      nama_cust: nama_cust,
      kontak_person: kontak_person,
      alamat: alamat,
      kota: kota,
      kode_pos: kode_pos,
      email: email,
      telp: telp,
      fax: fax,
      tipe: tipe,
      fd: this.checked,
      komp: "administrator",
      tgl_entry: latest_date,
      user_entry: "administrator"

    });
  }
}
