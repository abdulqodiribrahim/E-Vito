import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AreaData } from '../../../@core/data/master-data-modul/area';
import { DataTableService } from "../../tables/data-table.service";

import { NbDialogService } from '@nebular/theme';
import { AreaDialogComponent } from './area-dialog/area-dialog.component';
import { TmArea } from '../../../@core/data/model/master/tm-area.model';

@Component({
  selector: 'ngx-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
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
      area: {
        title: 'Area',
        type: 'text',
      },
    },
    pager:{
      display: true,
      perPage: 10,
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: AreaData, private dataTable: DataTableService, private dialogService: NbDialogService) {
    const data = this.service.getData();
    this.source.load(data);

    // this.source.refresh();
    // this.router.onSameUrlNavigation = 'reload';
  }

  tmArea: TmArea[];

  ngOnInit() {
    this.dataTable.getDataList('tm_area').subscribe(res => {
      this.tmArea = res.map( e => {
        const id =  e.payload.doc.id;
        const data = e.payload.doc.data() as TmArea;

        return {id, ...data} as TmArea;
      })
    });
  }

  onCreateConfirm(): void {
    // this.dataTable.createData("tm_area", event.newData);

    this.dialogService.open(AreaDialogComponent)
      .onClose.subscribe(name => console.log("success"));
    // .onClose.subscribe(name => name && this.names.push(name));
    console.log(this.tmArea);
  }

  onEditConfirm(event): void {
    this.dataTable.updateData("tm_area", event.newData);

    event.confirm.reject();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataTable.deleteData("tm_area", event.data);

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onDeleteAllConfirm(data): void{
    this.dataTable.getDataList(data).subscribe(res => {
      res.map(e => {
        this.dataTable.deleteAll(data, e.payload.doc.id);
      });
      // res.forEach(test => {
      //   this.addData[i] = test.payload.doc.data();
      //   i++;
      // });
    });
  }

  onShowAll(): void {
    const data = this.tmArea;
    this.source.load(data);

    // this.tmArea.forEach(e => {
    //   console.log(e.area);
    // })
  }
}
