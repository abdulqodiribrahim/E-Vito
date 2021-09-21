import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { DataTableService } from '../../data-table.service';

@Component({
  selector: 'ngx-area-dialog',
  templateUrl: './area-dialog.component.html',
  styleUrls: ['./area-dialog.component.scss']
})
export class AreaDialogComponent {

  myDate = new Date();
  constructor(protected ref: NbDialogRef<AreaDialogComponent>, private dataTable: DataTableService, private datePipe: DatePipe) { }

  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

  cancel() {
    this.ref.close();
  }

  submit(Area) {
    let latest_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.dataTable.createData("tm_area", {
      area: Area,
      fd: this.checked,
      komp: "administrator",
      user_entry: "administrator",
      tgl_entry: latest_date,
    });

    this.ref.close();
  }

}
