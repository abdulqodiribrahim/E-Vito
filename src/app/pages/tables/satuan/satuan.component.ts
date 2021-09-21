import { SatuanDialogComponent } from './satuan-dialog/satuan-dialog.component';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SatuanData } from '../../../@core/data/master-data-modul/satuan';
import { DataTableService } from "../../tables/data-table.service";
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-satuan',
  templateUrl: './satuan.component.html',
  styleUrls: ['./satuan.component.scss']
})
export class SatuanComponent {
  settings = {
    actions: {
      add: false,
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
      satuan: {
        title: 'Satuan',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SatuanData, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onCreateConfirm(): void {
    this.dialogService.open(SatuanDialogComponent)
      .onClose.subscribe(name => console.log("success"));
    // .onClose.subscribe(name => name && this.names.push(name));
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tm_satuan", event.newData);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tm_satuan", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onShowAll(): void {
    const data = this.service.getData();
    this.source.load(data);
  }
}
