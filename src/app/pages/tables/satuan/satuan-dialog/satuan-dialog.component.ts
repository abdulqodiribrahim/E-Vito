import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { DataTableService } from "../../../tables/data-table.service";

@Component({
  selector: 'ngx-satuan-dialog',
  templateUrl: './satuan-dialog.component.html',
  styleUrls: ['./satuan-dialog.component.scss']
})
export class SatuanDialogComponent implements OnInit {

  myDate = new Date();
  constructor(protected ref: NbDialogRef<SatuanDialogComponent>, private dataTable: DataTableService, private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  cancel() {
    this.ref.close();
  }

  submit(event) {
    let latest_date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.dataTable.createData("tm_satuan", {
      satuan: event,
      komp: "administrator",
      user_entry: "administrator",
      tgl_entry: latest_date,
    });
  }

}
