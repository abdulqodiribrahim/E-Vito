import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-supplier-dialog',
  templateUrl: './supplier-dialog.component.html',
  styleUrls: ['./supplier-dialog.component.scss']
})
export class SupplierDialogComponent {

  myDate = new Date();
  constructor(protected ref: NbDialogRef<SupplierDialogComponent>, private dataTable: DataTableService, private datePipe: DatePipe) { }

  cancel() {
    this.ref.close();
  }

  submit(kode_sup, nama_sup, kontak_person, alamat, kota, kode_pos, email, telp, fax, npwp) {
    let latest_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.dataTable.createData("tm_supplier", {
      kode_sup: kode_sup,
      nama_sup: nama_sup,
      kontak_person: kontak_person,
      alamat: alamat,
      kota: kota,
      kode_pos: kode_pos,
      email: email,
      telp: telp,
      fax: fax,
      npwp: npwp,
      komp: "administrator",
      user_entry: "administrator",
      tgl_entry: latest_date,
    });
  }

}
