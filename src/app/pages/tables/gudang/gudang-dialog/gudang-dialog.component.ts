import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-gudang-dialog',
  templateUrl: './gudang-dialog.component.html',
  styleUrls: ['./gudang-dialog.component.scss']
})
export class GudangDialogComponent {

  myDate = new Date();
  constructor(protected ref: NbDialogRef<GudangDialogComponent>, private dataTable: DataTableService, private datePipe: DatePipe) { }

  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

  cancel() {
    this.ref.close();
  }

  submit(kode_gud, nama_gud, kontak, alamat, kota, kd_pos, email, telp, fax, ket) {
    let latest_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.dataTable.createData("tm_gudang", {
      kode_gud: kode_gud,
      nama_gud: nama_gud,
      kontak: kontak,
      alamat: alamat,
      kota: kota,
      kd_pos: kd_pos,
      email: email,
      telp: telp,
      fax: fax,
      ket: ket,
      fd: this.checked,
      user_entry: "administrator",
      tgl_entry: latest_date,
    });

    this.ref.close();
  }

}
