import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-golongan-dialog',
  templateUrl: './golongan-dialog.component.html',
  styleUrls: ['./golongan-dialog.component.scss']
})
export class GolonganDialogComponent {

  myDate = new Date();
  constructor(protected ref: NbDialogRef<GolonganDialogComponent>, private dataTable: DataTableService, private datePipe: DatePipe) { }

  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

  cancel() {
    this.ref.close();
  }

  submit(golongan) {
    let latest_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.dataTable.createData("tm_golongan", {
      golongan: golongan,
      fd: this.checked,
      komp: "administrator",
      user_entry: "administrator",
      tgl_entry: latest_date,
    });

    this.ref.close();
  }

}
